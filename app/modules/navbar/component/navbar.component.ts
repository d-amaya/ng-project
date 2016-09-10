import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "navbar",
    templateUrl: "app/modules/navbar/template/navbar.component.html"
})
export class NavBarComponent { 
    constructor(private _router: Router) {
    }
}