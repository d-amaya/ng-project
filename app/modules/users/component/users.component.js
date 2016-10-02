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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/from");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/retry");
var users_service_1 = require("../service/users.service");
var UsersComponent = (function () {
    function UsersComponent(_usersService) {
        this._usersService = _usersService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._usersService.getUsers()
            .retry(2)
            .catch(function (error) {
            console.log("An error ocurred when consuming the users API.", error);
            return Observable_1.Observable.from([[]]);
        })
            .subscribe(function (users) { return _this.users = users; }, function (error) { return console.log("An error ocurred when transforming data user."); });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        var confirmation = confirm("Are you sure you want to delete the user?");
        if (!confirmation) {
            return;
        }
        var index = this.users.indexOf(user);
        this.users.splice(index, 1);
        this._usersService
            .deleteUser(user.id)
            .subscribe(null, function (error) {
            console.log("It was not possible to delete the user.", error);
            alert("It was not possible to delete the user.");
            _this.users.splice(index, 0, user);
        });
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: "users",
            templateUrl: "app/modules/users/template/users.template.html"
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map