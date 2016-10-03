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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var PostsService = (function () {
    function PostsService(_http) {
        this._http = _http;
        this.POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
    }
    PostsService.prototype.getPosts = function (userId) {
        var url = this.POSTS_URL;
        if (userId) {
            url += "?userId=" + userId;
        }
        return this._http
            .get(url)
            .map(function (posts) { return posts.json(); });
    };
    PostsService.prototype.getPostComments = function (idPost) {
        return this._http
            .get(this.getCommentsUrl(idPost))
            .map(function (comments) { return comments.json(); });
    };
    PostsService.prototype.getCommentsUrl = function (idPost) {
        return this.POSTS_URL + "/" + idPost + "/comments";
    };
    PostsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map