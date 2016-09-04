import {Component, OnInit} from "@angular/core";
import {FormBuilder, ControlGroup, Validators} from "@angular/common";
import {Router, RouteParams, CanDeactivate} from "@angular/router-deprecated";
import {Observable} from "rxjs/Observable";

import {UsersService} from "./../service/users.service";
import {CommonValidators} from "./../../../shared/common.validator";
import {User} from "./../../../entity/user";

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

    user = new User();

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
                    }
                );
        }       
    }

    routerCanDeactivate(next, prev) {
        if (next.urlPath !== "not-found" && !this.form.valid) {
            return confirm("You have unsaved changes. Are you sure you want to navigate away?");
        }
    }

    onSubmit() {
        var saveUserObservable: Observable<any>; 
        if (this.user.id) {
            saveUserObservable = this._usersService.updateUser(this.user.id, this.user);
        } else {
            saveUserObservable = this._usersService.createUser(this.user);
        }
        
        saveUserObservable.subscribe(res => {
            //this.form.markAsPristine();
            this._router.navigate(["Users"]);
        });
    }
}