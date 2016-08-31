import {Component, OnInit} from "angular2/core";
import {FormBuilder, ControlGroup, Validators} from "angular2/common";
import {Router, RouteParams, CanDeactivate} from "angular2/router";
import {Observable} from "rxjs/Observable";

import {UsersService} from "./../service/users.service";
import {CommonValidators} from "./../../../shared/common.validator";

@Component({
    selector: "create-user",
    templateUrl: "app/modules/users/template/save-user.template.html",
    styles: [`
        .ng-touched.ng-invalid {
            border: 1px solid red !important;
        }
    `],
    providers: [UsersService]
})
export class SaveUserComponent implements CanDeactivate, OnInit {
    form: ControlGroup;
    title: string = "New User";

    user = {
        name: "", email: "", phone: "", address: { street: "", suite: "", city: "", zipcode: "" }
    }

    constructor(private _formBuilder: FormBuilder, 
                private _router: Router,
                private _routeParams: RouteParams,
                private _usersService: UsersService) {

        this.form = this._formBuilder.group({
            name:  ["", Validators.compose([Validators.required])],
            email: ["", Validators.compose([Validators.required, CommonValidators.validEmailFormat])],
            phone: ["", Validators.compose([Validators.required, Validators.minLength(7)])],
            address: this._formBuilder.group({
                street:  ["", Validators.compose([Validators.required])],
                suite:   ["", Validators.compose([Validators.required])],
                city:    ["", Validators.compose([Validators.required])],
                zipCode: ["", Validators.compose([Validators.required])]
            })
        });
    }

    ngOnInit() {
        var userId = this._routeParams.get("id");
        if (userId) {
            this.title = "Edit User";
            this._usersService.getUser(userId)
                .subscribe(
                    user => {
                        if (user && user.id) {
                            this.user = user;
                        }
                    },
                    error => {
                        if (error.status === 404) {
                            this._router.navigate(["NotFound"]);
                        }
                    },
                    () => console.log("Getting user by id is done.")
                );
        }       
    }

    routerCanDeactivate(next, prev) {
        if (next.urlPath !== "not-found" && !this.form.valid) {
            return confirm("You have unsaved changes. Are you sure you want to navigate away?");
        }
    }

    onSubmit() {
        console.log(this.form.value);
        this._usersService.addUser(this.form.value)
            .subscribe(res => {
                console.log(res);
                //this.form.markAsPristine();
                this._router.navigate(["Users"]);
            });
    }
}