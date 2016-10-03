"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var _ = require("underscore");
require("rxjs/add/observable/from");
require("rxjs/add/observable/forkJoin");
require("rxjs/add/operator/retry");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/mergeMap");
var posts_service_1 = require("./../service/posts.service");
var users_service_1 = require("./../../users/service/users.service");
var PostsComponent = (function () {
    function PostsComponent(_postsService, _usersService) {
        this._postsService = _postsService;
        this._usersService = _usersService;
        this.isLoadingComments = false;
        this.isLoadingPosts = true;
        this.pageSize = 10;
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.prepareInitialDataForm();
    };
    PostsComponent.prototype.onPostSelected = function (post) {
        var _this = this;
        this.isLoadingComments = true;
        this.selectedPost = post;
        this._postsService
            .getPostComments(post.id)
            .retry(2)
            .catch(function (err) {
            console.log("There was an error while consumming de comments API.", err);
            return Observable_1.Observable.from([[]]);
        })
            .subscribe(function (comments) { return _this.selectedPost.comments = comments; }, function (error) { return console.log("An error ocurred when transforming getPostComments response.", error); }, function () { return _this.isLoadingComments = false; });
    };
    PostsComponent.prototype.onUserSelected = function (filter) {
        var _this = this;
        this.loadPosts(filter.userId)
            .subscribe(function (posts) {
            _this.configurePostsPaginator(posts);
        }, function (error) { return console.log("Ocurrio un error while transforming the posts.", error); }, function () {
            _this.isLoadingPosts = false;
        });
    };
    PostsComponent.prototype.onPostsPagination = function ($event) {
        var intitalPost = $event.newPage * this.pageSize;
        this.currentPagePosts = _.take(_.rest(this.totalPosts, intitalPost), this.pageSize);
    };
    PostsComponent.prototype.prepareInitialDataForm = function () {
        var _this = this;
        Observable_1.Observable.forkJoin([this.loadUsers(), this.loadPosts()])
            .flatMap(function (forkResponse) { return Observable_1.Observable.from([{ users: forkResponse[0], posts: forkResponse[1] }]); })
            .catch(function (error) {
            console.log("An error ocurred when preparing initial data for Posts view.", error);
            return Observable_1.Observable.from([{ users: [], posts: [] }]);
        })
            .subscribe(function (result) {
            _this.configurePostsPaginator(result["posts"]);
            _this.users = result["users"];
        }, function (error) { return console.log("An error ocurred when transforming getPosts response.", error); }, function () { return _this.isLoadingPosts = false; });
    };
    PostsComponent.prototype.loadUsers = function () {
        return this._usersService
            .getUsers()
            .retry(2)
            .catch(function (error) {
            console.log("An error ocurred when consumming the Users API.", error);
            return Observable_1.Observable.from([[]]);
        });
    };
    PostsComponent.prototype.loadPosts = function (userId) {
        this.isLoadingPosts = true;
        return this._postsService
            .getPosts(userId)
            .retry(2)
            .catch(function (error) {
            console.log("An error ocurred when consumming the Posts API.", error);
            return Observable_1.Observable.from([[]]);
        });
    };
    PostsComponent.prototype.configurePostsPaginator = function (items) {
        this.totalPosts = items;
        if (items && items.length > 0) {
            this.currentPagePosts = _.take(items, this.pageSize);
        }
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: "posts",
            templateUrl: "app/modules/posts/template/posts.template.html",
            styleUrls: ["app/modules/posts/template/posts.style.css"]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map