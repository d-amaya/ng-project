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
                    this.pageSize = 10;
                    this.items = [];
                    this.pageChanged = new core_1.EventEmitter();
                }
                PaginatorComponent.prototype.getPageItems = function (indexPage) {
                    this.pageChanged.emit({ newPage: indexPage, pageSize: this.pageSize });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], PaginatorComponent.prototype, "items", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PaginatorComponent.prototype, "pageChanged", void 0);
                PaginatorComponent = __decorate([
                    core_1.Component({
                        selector: "paginator",
                        template: "\n        <nav aria-label=\"Page navigation\" *ngIf=\"items?.length > pageSize\">\n            <ul class=\"pagination\">\n                <li>\n                    <a href=\"#\" aria-label=\"Previous\">\n                        <span aria-hidden=\"true\">&laquo;</span>\n                    </a>\n                </li>\n                <li *ngFor=\"#item of items; #i = index\">\n                    <a (click)=\"getPageItems(i)\">{{ i + 1 }}</a>\n                </li>\n                <li>\n                    <a href=\"#\" aria-label=\"Next\">\n                        <span aria-hidden=\"true\">&raquo;</span>\n                    </a>\n                </li>\n            </ul>\n        </nav>\n    "
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