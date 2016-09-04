import {Component, OnInit} from "angular2/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/observable/forkJoin";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/mergeMap";

import {SpinnerComponent} from "./../../spinner/component/spinner.component";
import {PostsService} from "./../service/posts.service";
import {UsersService} from "./../service/users.service";
import {PaginatorComponent} from "./../../pagination/component/paginator.component";

@Component({
    selector: "posts",
    templateUrl: "app/modules/posts/template/posts.template.html",
    styleUrls: ["app/modules/posts/template/posts.style.css"],
    providers: [PostsService, UsersService],
    directives: [SpinnerComponent, PaginatorComponent]
})
export class PostsComponent implements OnInit {
    isLoadingComments: boolean = false;
    isLoadingPosts: boolean = true;

    selectedPost: any;
    totalPosts: any[];
    users: any[];

    currentPagePosts: any[];
    pageSize: number = 10;
    pages: any[];

    constructor(private _postsService: PostsService, private _usersService: UsersService) {
    }

    ngOnInit() {
        this.prepareInitialDataForm();
    }

    onPostSelected(post) {
        this.isLoadingComments = true;
        this.selectedPost = post;

        this._postsService
            .getPostComments(post.id)
            .retry(2)
            .catch(err => {
                console.log("There was an error while consumming de comments API.", err);
                return Observable.of([[]]);
            })
            .subscribe(
                comments => this.selectedPost.comments = comments,
                error => console.log("An error ocurred when transforming getPostComments response.", error),
                () => this.isLoadingComments = false
            );  
    }

    onUserSelected(filter) {
        this.loadPosts(filter.userId)
            .subscribe(
                posts => {
                    this.configurePostsPaginator(posts);
                },
                error => console.log("Ocurrio un error while transforming the posts.", error),
                () => {
                    console.log("The loadPosts action is Done.");
                    this.isLoadingPosts = false;
                }
            );
    }

    onPostsPagination($event) {
        var intitalPost = $event.newPage * this.pageSize;
        var finalPost = intitalPost + this.pageSize;
        this.currentPagePosts = _.take(_.rest(this.totalPosts, intitalPost), finalPost);
    }

    private prepareInitialDataForm() {
        Observable.forkJoin([ this.loadUsers(), this.loadPosts() ])
            .flatMap(forkResponse => Observable.from([{users: forkResponse[0], posts: forkResponse[1]}]))
            .catch(error => {
                console.log("An error ocurred when preparing initial data for Posts view.", error);
                return Observable.from([{users: [], posts: []}]);
            }) 
            .subscribe(
                result => {
                    this.configurePostsPaginator(result["posts"]);
                    this.users = result["users"];
                },
                error => console.log("An error ocurred when transforming getPosts response.", error),
                () => this.isLoadingPosts = false
            ); 
    }

    private loadUsers(): Observable<any> {
        return this._usersService
            .getUsers()
            .retry(2)
            .catch(error => {
                console.log("An error ocurred when consumming the Users API.", error);
                return Observable.from([[]]);
            });
    }

    private loadPosts(userId?): Observable<any> {
        this.isLoadingPosts = true;
        return this._postsService
            .getPosts(userId)
            .retry(2)
            .catch(error => {
                console.log("An error ocurred when consumming the Posts API.", error);
                return Observable.from([[]]);
            });
    }

    private configurePostsPaginator(items) {
        this.totalPosts = items;
        if (items && items.length > 0) {
            this.currentPagePosts = _.take(items, this.pageSize);
        }
    }
}