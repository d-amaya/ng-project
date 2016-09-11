import {Component, OnInit, OnDestroy} from "@angular/core";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

import {FormComponent} from "../../../auth/prevent-unsaved-changes-guard.service";
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
    `]
})
export class SaveUserComponent implements OnDestroy, OnInit, FormComponent {
    form: FormGroup;
    title: string = "New User";
    subscription: Subscription;

    user = new User();

    constructor(private _formBuilder: FormBuilder, 
                private _router: Router,
                private _route: ActivatedRoute,
                private _usersService: UsersService) {

        this.form = this._formBuilder.group({
            name:  ["", Validators.required],
            email: ["", [Validators.required, CommonValidators.validEmailFormat]],
            phone: ["", [Validators.required, Validators.minLength(7)]],
            address: this._formBuilder.group({
                street:  ["", Validators.required],
                suite:   ["", Validators.required],
                city:    ["", Validators.required],
                zipCode: ["", Validators.required]
            })
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        var userId;

        this.subscription = this._route.params.subscribe(params => {
            userId = +params["id"];
        })

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
                            this._router.navigate(["not-found"]);
                        }
                    }
                );
        }       
    }

    hasUnsavedChanges() {
        return this.form.dirty;
    }

    onSubmit() {
        console.log(this.user);
        var saveUserObservable: Observable<any>; 
        if (this.user.id) {
            saveUserObservable = this._usersService.updateUser(this.user.id, this.user);
        } else {
            saveUserObservable = this._usersService.createUser(this.user);
        }
        
        saveUserObservable.subscribe(res => {
            //this.form.markAsPristine();
            this._router.navigate(["users"]);
        });
    }
}