import {Component, OnChanges, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "paginator",
    templateUrl: "app/modules/pagination/template/paginator.template.html"
})
export class PaginatorComponent implements OnChanges {

    activePage: number;
    pages: any[];

    @Input("page-size") pageSize: number; 
    @Input("items") items: any[];
    @Output("page-changed") pageChanged = new EventEmitter(); 

    ngOnChanges() {
        this.pages = new Array(Math.ceil(this.items.length / this.pageSize));
        this.activePage = 0;
    }

    getPageItems(indexPage) {
        this.activePage = indexPage;
        this.pageChanged.emit({ newPage: indexPage });
    }

    private incrementPage() {
        if (this.activePage < this.pages.length - 1) {
            this.activePage += 1;
            this.pageChanged.emit({ newPage: this.activePage });
        }
    }

    private decreasePage() {
        if (this.activePage > 0) {
            this.activePage -= 1;
            this.pageChanged.emit({ newPage: this.activePage });
        }
    }
}