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
var PaginatorComponent = (function () {
    function PaginatorComponent() {
        this.pageChanged = new core_1.EventEmitter();
    }
    PaginatorComponent.prototype.ngOnChanges = function () {
        this.pages = new Array(Math.ceil(this.items.length / this.pageSize));
        this.activePage = 0;
    };
    PaginatorComponent.prototype.getPageItems = function (indexPage) {
        this.activePage = indexPage;
        this.pageChanged.emit({ newPage: indexPage });
    };
    PaginatorComponent.prototype.incrementPage = function () {
        if (this.activePage < this.pages.length - 1) {
            this.activePage += 1;
            this.pageChanged.emit({ newPage: this.activePage });
        }
    };
    PaginatorComponent.prototype.decreasePage = function () {
        if (this.activePage > 0) {
            this.activePage -= 1;
            this.pageChanged.emit({ newPage: this.activePage });
        }
    };
    __decorate([
        core_1.Input("page-size"), 
        __metadata('design:type', Number)
    ], PaginatorComponent.prototype, "pageSize", void 0);
    __decorate([
        core_1.Input("items"), 
        __metadata('design:type', Array)
    ], PaginatorComponent.prototype, "items", void 0);
    __decorate([
        core_1.Output("page-changed"), 
        __metadata('design:type', Object)
    ], PaginatorComponent.prototype, "pageChanged", void 0);
    PaginatorComponent = __decorate([
        core_1.Component({
            selector: "paginator",
            templateUrl: "app/modules/pagination/template/paginator.template.html"
        }), 
        __metadata('design:paramtypes', [])
    ], PaginatorComponent);
    return PaginatorComponent;
}());
exports.PaginatorComponent = PaginatorComponent;
//# sourceMappingURL=paginator.component.js.map