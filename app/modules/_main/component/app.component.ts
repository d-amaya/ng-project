import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {NavBarComponent} from "./../../navbar/component/navbar.component";
import {HomeComponent} from "./../../home/component/home.component";
import {UsersComponent} from "./../../users/component/users.component";
import {SaveUserComponent} from "./../../users/component/save-user.component";
import {PostsComponent} from "./../../posts/component/posts.component";
import {NotFoundComponent} from "./../../exception/component/not-found.component";

@RouteConfig([
    { path: "/", name: "Home", component: HomeComponent },

    { path: "/users", name: "Users", component: UsersComponent, useAsDefault: true },
    { path: "/users/:id", name: "EditUser", component: SaveUserComponent },
    { path: "/users/new", name: "CreateUser", component: SaveUserComponent },

    { path: "/posts", name: "Posts", component: PostsComponent },

    { path: "/not-found", name: "NotFound", component: NotFoundComponent },
    { path: "/*other", name: "Other", redirectTo: ["Home"] }
])
@Component({
	selector: "my-app",
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, NavBarComponent],
    styles: [`
        .container div.content-div {
            padding: 30px;
        }
    `]
})
export class AppComponent {
}