import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: "paginator",
    template: `
        <nav aria-label="Page navigation" *ngIf="items?.length > pageSize">
            <ul class="pagination">
                <li>
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li *ngFor="#item of items; #i = index">
                    <a (click)="getPageItems(i)">{{ i + 1 }}</a>
                </li>
                <li>
                    <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    `
})
export class PaginatorComponent {

    pageSize: number = 10;

    @Input() items: any[] = [];
    @Output() pageChanged = new EventEmitter(); 

    getPageItems(indexPage) {
        this.pageChanged.emit({ newPage: indexPage, pageSize: this.pageSize });
    }
}