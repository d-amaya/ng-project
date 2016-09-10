import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { UsersComponent }  from './component/users.component';
import { SaveUserComponent }  from './component/save-user.component';
import { UsersService }  from './service/users.service';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule
    ],
    declarations: [ 
        UsersComponent,
        SaveUserComponent
    ],
    providers: [ UsersService ],
    exports: [ UsersComponent, SaveUserComponent ]
})
export class UsersModule {
}