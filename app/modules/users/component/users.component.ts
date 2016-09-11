import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/retry";

import {UsersService} from "../service/users.service";

@Component({
    selector: "users",
    templateUrl: "app/modules/users/template/users.template.html"
})
export class UsersComponent implements OnInit {
    users;

    constructor(private _usersService: UsersService) {
    }

    ngOnInit() {
        this._usersService.getUsers()
            .retry(2)
            .catch(error => {
                console.log("An error ocurred when consuming the users API.", error);
                return Observable.from([[]]);
            })
            .subscribe(
                users => this.users = users,
                error => console.log("An error ocurred when transforming data user.")
            )
    }

    deleteUser(user) {
        var confirmation = confirm("Are you sure you want to delete the user?");
        if (!confirmation) {
            return;
        }

        var index = this.users.indexOf(user);
            this.users.splice(index, 1);

            this._usersService
                .deleteUser(user.id)
                .subscribe(
                    null,
                    error => {
                        console.log("It was not possible to delete the user.", error);
                        alert("It was not possible to delete the user.");
                        this.users.splice(index, 0, user);
                    }
                );
    }
}