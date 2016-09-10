import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import {PostsComponent} from "./component/posts.component";
import {PostsService} from "./service/posts.service";
import {UsersService} from "./../users/service/users.service";

import { PaginatorComponent }  from './../pagination/component/paginator.component';
import { SpinnerComponent }  from './../spinner/component/spinner.component';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule, 
        HttpModule
    ],
    declarations: [ 
        PostsComponent,
        PaginatorComponent,
        SpinnerComponent 
    ],
    providers: [ PostsService, UsersService ],
    exports: [ PostsComponent ]
})
export class PostsModule {
}