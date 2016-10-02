"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var users_service_1 = require("./../service/users.service");
var common_validator_1 = require("./../../../shared/common.validator");
var user_1 = require("./../../../entity/user");
var SaveUserComponent = (function () {
    function SaveUserComponent(_formBuilder, _router, _route, _usersService) {
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._route = _route;
        this._usersService = _usersService;
        this.title = "New User";
        this.user = new user_1.User();
        this.form = this._formBuilder.group({
            name: ["", forms_1.Validators.required],
            email: ["", [forms_1.Validators.required, common_validator_1.CommonValidators.validEmailFormat]],
            phone: ["", [forms_1.Validators.required, forms_1.Validators.minLength(7)]],
            address: this._formBuilder.group({
                street: ["", forms_1.Validators.required],
                suite: ["", forms_1.Validators.required],
                city: ["", forms_1.Validators.required],
                zipCode: ["", forms_1.Validators.required]
            })
        });
    }
    SaveUserComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SaveUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId;
        this.subscription = this._route.params.subscribe(function (params) {
            userId = +params["id"];
        });
        if (userId) {
            this.title = "Edit User";
            this._usersService.getUser(userId)
                .subscribe(function (user) {
                if (user && user.id) {
                    _this.user = user;
                }
            }, function (error) {
                if (error.status === 404) {
                    _this._router.navigate(["not-found"]);
                }
            });
        }
    };
    SaveUserComponent.prototype.hasUnsavedChanges = function () {
        return this.form.dirty;
    };
    SaveUserComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        var saveUserObservable;
        if (this.user.id) {
            saveUserObservable = this._usersService.updateUser(this.user.id, this.user);
        }
        else {
            saveUserObservable = this._usersService.createUser(this.user);
        }
        saveUserObservable.subscribe(function (res) {
            //this.form.markAsPristine();
            _this._router.navigate(["users"]);
        });
    };
    SaveUserComponent = __decorate([
        core_1.Component({
            selector: "create-user",
            templateUrl: "app/modules/users/template/save-user.template.html",
            styles: ["\n        .ng-touched.ng-invalid {\n            border: 1px solid red !important;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute, users_service_1.UsersService])
    ], SaveUserComponent);
    return SaveUserComponent;
}());
exports.SaveUserComponent = SaveUserComponent;
//# sourceMappingURL=save-user.component.js.map