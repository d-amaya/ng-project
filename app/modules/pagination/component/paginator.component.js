System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var PaginatorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PaginatorComponent = (function () {
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
                        template: "\n        <nav aria-label=\"Page navigation\" *ngIf=\"items?.length > pageSize\">\n            <ul class=\"pagination\">\n                <li [class.disabled]=\"activePage == 0\">\n                    <a (click)=\"decreasePage()\" aria-label=\"Previous\">\n                        <span aria-hidden=\"true\">&laquo;</span>\n                    </a>\n                </li>\n                <li *ngFor=\"#page of pages; #i = index\" [class.active]=\"activePage == i\">\n                    <a (click)=\"getPageItems(i)\">{{ i + 1 }}</a>\n                </li>\n                <li [class.disabled]=\"activePage == pages.length-1\">\n                    <a (click)=\"incrementPage()\" aria-label=\"Next\">\n                        <span aria-hidden=\"true\">&raquo;</span>\n                    </a>\n                </li>\n            </ul>\n        </nav>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PaginatorComponent);
                return PaginatorComponent;
            }());
            exports_1("PaginatorComponent", PaginatorComponent);
        }
    }
});
//# sourceMappingURL=paginator.component.js.map