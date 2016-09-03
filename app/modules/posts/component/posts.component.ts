import {Component, OnInit} from "angular2/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/observable/forkJoin";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/skip";
import "rxjs/add/operator/take";

import {SpinnerComponent} from "./../../spinner/component/spinner.component";
import {PostsService} from "./../service/posts.service";
import {UsersService} from "./../service/users.service";
import {PaginatorComponent} from "./../../pagination/component/paginator.component";

@Component({
    selector: "posts",
    templateUrl: "app/modules/posts/template/posts.template.html",
    styles: [`
        .posts li { cursor: default; } .posts li:hover { background: #ecf0f1 }
        .list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {
            background-color: #ecf0f1; border-color: #ecf0f1; color: #2c3e50;
        }
        .thumbnail { border-radius: 100%; }
    `],
    providers: [PostsService, UsersService],
    directives: [SpinnerComponent, PaginatorComponent]
})
export class PostsComponent implements OnInit {
    isLoadingComments: boolean = false;
    isLoadingPosts: boolean = true;

    selectedPost: any;
    posts: any[];
    users: any[];
    page: number = 0;
    size: number = 10;

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
        this.loadPosts(this.page, this.size, filter.userId)
            .subscribe(
                posts => this.posts = posts,
                error => console.log("Ocurrio un error while transforming the posts.", error),
                () => {
                    console.log("The loadPosts action is Done.");
                    this.isLoadingPosts = false;
                }
            );
    }

    onPostsPagination($event) {
        console.log("Pagination", $event);
    }

    private prepareInitialDataForm() {
        Observable.forkJoin([ this.loadUsers(), this.loadPosts(this.page, this.size) ])
        .flatMap(forkResponse => Observable.from([{users: forkResponse[0], posts: forkResponse[1]}]))
        .catch(error => {
            console.log("An error ocurred when preparing initial data for Posts view.", error);
            return Observable.from([{users: [], posts: []}]);
        }) 
        .subscribe(
            result => {
                this.users = result["users"];
                this.posts = result["posts"].slice(0, 10);
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

    private loadPosts(page:number, size:number, userId?): Observable<any> {
        this.isLoadingPosts = true;
        return this._postsService
                .getPosts(userId)
                .skip(page*size)
                .take(size)
                .retry(2)
                .catch(error => {
                    console.log("An error ocurred when consumming the Posts API.", error);
                    return Observable.from([[]]);
                });
    }
}