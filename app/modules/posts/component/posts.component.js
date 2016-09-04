System.register(["angular2/core", "rxjs/Observable", "rxjs/add/observable/from", "rxjs/add/observable/forkJoin", "rxjs/add/operator/retry", "rxjs/add/operator/catch", "rxjs/add/operator/mergeMap", "./../../spinner/component/spinner.component", "./../service/posts.service", "./../service/users.service", "./../../pagination/component/paginator.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, spinner_component_1, posts_service_1, users_service_1, paginator_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (paginator_component_1_1) {
                paginator_component_1 = paginator_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
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
                        return Observable_1.Observable.of([[]]);
                    })
                        .subscribe(function (comments) { return _this.selectedPost.comments = comments; }, function (error) { return console.log("An error ocurred when transforming getPostComments response.", error); }, function () { return _this.isLoadingComments = false; });
                };
                PostsComponent.prototype.onUserSelected = function (filter) {
                    var _this = this;
                    this.loadPosts(filter.userId)
                        .subscribe(function (posts) {
                        _this.configurePostsPaginator(posts);
                    }, function (error) { return console.log("Ocurrio un error while transforming the posts.", error); }, function () {
                        console.log("The loadPosts action is Done.");
                        _this.isLoadingPosts = false;
                    });
                };
                PostsComponent.prototype.onPostsPagination = function ($event) {
                    var intitalPost = $event.newPage * this.pageSize;
                    var finalPost = intitalPost + this.pageSize;
                    this.currentPagePosts = this.totalPosts.slice(intitalPost, finalPost);
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
                        this.currentPagePosts = items.slice(0, this.pageSize);
                    }
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: "posts",
                        templateUrl: "app/modules/posts/template/posts.template.html",
                        styleUrls: ["app/modules/posts/template/posts.style.css"],
                        providers: [posts_service_1.PostsService, users_service_1.UsersService],
                        directives: [spinner_component_1.SpinnerComponent, paginator_component_1.PaginatorComponent]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map