System.register(["angular2/core", "./../service/posts.service", "rxjs/Observable", "rxjs/add/operator/retry", "rxjs/add/operator/catch", "rxjs/add/observable/from", "./../../spinner/component/spinner.component"], function(exports_1, context_1) {
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
    var core_1, posts_service_1, Observable_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService) {
                    this._postsService = _postsService;
                    this.isLoadingPosts = true;
                    this.isLoadingComments = false;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postsService
                        .getPosts()
                        .retry(2)
                        .catch(function (err) {
                        console.log("There was an error while consumming de posts API.", err);
                        return Observable_1.Observable.from([[]]);
                    })
                        .subscribe(function (posts) { return _this.posts = posts.slice(0, 10); }, function (error) { return console.log("An error ocurred when transforming getPosts response.", error); }, function () { return _this.isLoadingPosts = false; });
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
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: "posts",
                        templateUrl: "app/modules/posts/template/posts.template.html",
                        styles: ["\n        .posts li { cursor: default; }\n        .posts li:hover { background: #ecf0f1 }\n\n        .list-group-item.active,\n        .list-group-item.active:hover,\n        .list-group-item.active:focus {\n            background-color: #ecf0f1;\n            border-color: #ecf0f1;\n            color: #2c3e50;\n        }\n\n        .thumbnail { border-radius: 100%; }\n    "],
                        providers: [posts_service_1.PostsService],
                        directives: [spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map