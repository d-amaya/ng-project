import {Component, OnInit} from "angular2/core";
import {PostsService} from "./../service/posts.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/from";

import {SpinnerComponent} from "./../../spinner/component/spinner.component";

@Component({
    selector: "posts",
    templateUrl: "app/modules/posts/template/posts.template.html",
    styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1 }

        .list-group-item.active,
        .list-group-item.active:hover,
        .list-group-item.active:focus {
            background-color: #ecf0f1;
            border-color: #ecf0f1;
            color: #2c3e50;
        }

        .thumbnail { border-radius: 100%; }
    `],
    providers: [PostsService],
    directives: [SpinnerComponent]
})
export class PostsComponent implements OnInit {

    posts: any[];

    isLoadingPosts: boolean = true;
    isLoadingComments: boolean = false;
    selectedPost: any;

    constructor(private _postsService: PostsService) {
    }

    ngOnInit() {
        this._postsService
            .getPosts()
            .retry(2)
            .catch(err => {
                console.log("There was an error while consumming de posts API.", err);
                return Observable.from([[]]);
            })
            .subscribe(
                posts => this.posts = posts.slice(0, 10),
                error => console.log("An error ocurred when transforming getPosts response.", error),
                () => this.isLoadingPosts = false);
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
            )
            
    }
}