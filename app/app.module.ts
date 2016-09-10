import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Entry Components
import { AppComponent }  from './app.component';

// Routings
import { routing, appRoutingProviders } from "./app.routing";
import { usersRouting } from './modules/users/users.routing';
import { postsRouting } from './modules/posts/posts.routing';

// Imported Modules
import { HomeModule }  from './modules/home/home.module';
import { NavbarModule }  from './modules/navbar/navbar.module';
import { PostsModule }  from './modules/posts/posts.module';
import { UsersModule }  from './modules/users/users.module';


@NgModule({
  imports: [ 
    BrowserModule, 
    NavbarModule,
    HomeModule,
    PostsModule,
    UsersModule,
    usersRouting,
    postsRouting,
    routing,
  ],
  declarations: [ AppComponent ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }