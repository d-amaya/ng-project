import { NgModule }      from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from "./routing/app.routing";

import { AppComponent }  from './app.component';
import { NavBarComponent }  from './modules/navbar/component/navbar.component';
import { HomeComponent }  from './modules/home/component/home.component';
import { NotFoundComponent }  from './modules/exception/component/not-found.component';
import { UsersComponent }  from './modules/users/component/users.component';
import { SaveUserComponent }  from './modules/users/component/save-user.component';
import { PostsComponent }  from './modules/posts/component/posts.component';
import { PaginatorComponent }  from './modules/pagination/component/paginator.component';
import { SpinnerComponent }  from './modules/spinner/component/spinner.component';

import { UsersService }  from './modules/users/service/users.service';
import { PostsService }  from './modules/posts/service/posts.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule 
  ],
  declarations: [ 
    AppComponent, 
    NavBarComponent,
    HomeComponent, 
    NotFoundComponent, 
    UsersComponent,
    SaveUserComponent,
    PostsComponent,
    PaginatorComponent,
    SpinnerComponent
  ],
  providers: [
    appRoutingProviders,
    PostsService,
    UsersService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }