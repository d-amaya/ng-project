import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";

@Component({
    selector: "navbar",
    templateUrl: "app/modules/navbar/template/navbar.component.html",
    directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent { 
    constructor(private _router: Router) {
    }
}