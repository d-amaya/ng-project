import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/retry";

import {UsersService} from "./../service/users.service";

@Component({
    selector: "users",
    templateUrl: "app/modules/users/template/users.template.html",
    providers: [UsersService],
    directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent implements OnInit {
    users: any[];

    constructor(private _usersService: UsersService) {
    }

    ngOnInit() {
        this._usersService.getUsers()
            .retry(2)
            .catch(error => {
                console.log("An error ocurred when consuming the users API.");
                return Observable.of([]);
            })
            .subscribe(
                users => this.users = users,
                error => console.log("An error ocurred when transforming data user."),
                () => console.log("Users API consuming is done.")
            )
    }
}