import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import {HomeComponent} from "./modules/home/component/home.component";
import {UsersComponent} from "./modules/users/component/users.component";
import {SaveUserComponent} from "./modules/users/component/save-user.component";
import {PostsComponent} from "./modules/posts/component/posts.component";

const appRoute: Routes = [
    { path: "", component: HomeComponent },
    { path: "**", component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoute);