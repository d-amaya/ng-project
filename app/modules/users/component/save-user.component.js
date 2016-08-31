System.register(["angular2/core", "angular2/common", "angular2/router", "./../service/users.service", "./../../../shared/common.validator"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, users_service_1, common_validator_1;
    var SaveUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (common_validator_1_1) {
                common_validator_1 = common_validator_1_1;
            }],
        execute: function() {
            SaveUserComponent = (function () {
                function SaveUserComponent(_formBuilder, _router, _routeParams, _usersService) {
                    this._formBuilder = _formBuilder;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._usersService = _usersService;
                    this.title = "New User";
                    this.user = {
                        name: "", email: "", phone: "", address: { street: "", suite: "", city: "", zipcode: "" }
                    };
                    this.form = this._formBuilder.group({
                        name: ["", common_1.Validators.compose([common_1.Validators.required])],
                        email: ["", common_1.Validators.compose([common_1.Validators.required, common_validator_1.CommonValidators.validEmailFormat])],
                        phone: ["", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(7)])],
                        address: this._formBuilder.group({
                            street: ["", common_1.Validators.compose([common_1.Validators.required])],
                            suite: ["", common_1.Validators.compose([common_1.Validators.required])],
                            city: ["", common_1.Validators.compose([common_1.Validators.required])],
                            zipCode: ["", common_1.Validators.compose([common_1.Validators.required])]
                        })
                    });
                }
                SaveUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var userId = this._routeParams.get("id");
                    if (userId) {
                        this.title = "Edit User";
                        this._usersService.getUser(userId)
                            .subscribe(function (user) {
                            if (user && user.id) {
                                _this.user = user;
                            }
                        }, function (error) {
                            if (error.status === 404) {
                                _this._router.navigate(["NotFound"]);
                            }
                        }, function () { return console.log("Getting user by id is done."); });
                    }
                };
                SaveUserComponent.prototype.routerCanDeactivate = function (next, prev) {
                    if (next.urlPath !== "not-found" && !this.form.valid) {
                        return confirm("You have unsaved changes. Are you sure you want to navigate away?");
                    }
                };
                SaveUserComponent.prototype.onSubmit = function () {
                    var _this = this;
                    console.log(this.form.value);
                    this._usersService.addUser(this.form.value)
                        .subscribe(function (res) {
                        console.log(res);
                        //this.form.markAsPristine();
                        _this._router.navigate(["Users"]);
                    });
                };
                SaveUserComponent = __decorate([
                    core_1.Component({
                        selector: "create-user",
                        templateUrl: "app/modules/users/template/save-user.template.html",
                        styles: ["\n        .ng-touched.ng-invalid {\n            border: 1px solid red !important;\n        }\n    "],
                        providers: [users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _c) || Object, users_service_1.UsersService])
                ], SaveUserComponent);
                return SaveUserComponent;
                var _a, _b, _c;
            }());
            exports_1("SaveUserComponent", SaveUserComponent);
        }
    }
});
//# sourceMappingURL=save-user.component.js.map