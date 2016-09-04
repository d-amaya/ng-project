import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router-deprecated";

@Component({
    selector: "navbar",
    templateUrl: "app/modules/navbar/template/navbar.component.html",
    directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent { 
    constructor(private _router: Router) {
    }
}