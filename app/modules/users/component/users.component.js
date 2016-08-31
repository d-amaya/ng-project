System.register(["angular2/core", "angular2/router", "rxjs/Observable", "rxjs/add/operator/catch", "rxjs/add/operator/retry", "./../service/users.service"], function(exports_1, context_1) {
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
    var core_1, router_1, Observable_1, users_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_usersService) {
                    this._usersService = _usersService;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._usersService.getUsers()
                        .retry(2)
                        .catch(function (error) {
                        console.log("An error ocurred when consuming the users API.");
                        return Observable_1.Observable.of([]);
                    })
                        .subscribe(function (users) { return _this.users = users; }, function (error) { return console.log("An error ocurred when transforming data user."); }, function () { return console.log("Users API consuming is done."); });
                };
                UsersComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    console.log(user);
                    var confirmation = confirm("Are you sure you want to delete the user?");
                    if (confirmation) {
                        var index = this.users.indexOf(user);
                        this.users.splice(index, 1);
                        this._usersService.deleteUser(user.id)
                            .subscribe(null, function (error) {
                            console.log(error);
                            alert("It was not possible to delete the user.");
                            _this.users.splice(index, 0, user);
                        });
                    }
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: "users",
                        templateUrl: "app/modules/users/template/users.template.html",
                        providers: [users_service_1.UsersService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map