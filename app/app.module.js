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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
// Entry Components
var app_component_1 = require('./app.component');
// Routings
var app_routing_1 = require("./app.routing");
var users_routing_1 = require('./modules/users/users.routing');
var posts_routing_1 = require('./modules/posts/posts.routing');
var auth_service_1 = require("./auth/auth.service");
var auth_guard_service_1 = require("./auth/auth-guard.service");
var prevent_unsaved_changes_guard_service_1 = require("./auth/prevent-unsaved-changes-guard.service");
// Imported Modules
var home_module_1 = require('./modules/home/home.module');
var navbar_module_1 = require('./modules/navbar/navbar.module');
var posts_module_1 = require('./modules/posts/posts.module');
var users_module_1 = require('./modules/users/users.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                navbar_module_1.NavbarModule,
                home_module_1.HomeModule,
                posts_module_1.PostsModule,
                users_module_1.UsersModule,
                users_routing_1.usersRouting,
                posts_routing_1.postsRouting,
                app_routing_1.routing,
            ],
            declarations: [app_component_1.AppComponent],
            providers: [
                app_routing_1.appRoutingProviders,
                auth_service_1.AuthService,
                auth_guard_service_1.AuthGuard,
                prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map