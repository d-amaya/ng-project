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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var posts_component_1 = require("./component/posts.component");
var posts_service_1 = require("./service/posts.service");
var users_service_1 = require("./../users/service/users.service");
var paginator_component_1 = require('./../pagination/component/paginator.component');
var spinner_component_1 = require('./../spinner/component/spinner.component');
var PostsModule = (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            declarations: [
                posts_component_1.PostsComponent,
                paginator_component_1.PaginatorComponent,
                spinner_component_1.SpinnerComponent
            ],
            providers: [posts_service_1.PostsService, users_service_1.UsersService],
            exports: [posts_component_1.PostsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PostsModule);
    return PostsModule;
}());
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map