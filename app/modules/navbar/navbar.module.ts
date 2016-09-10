import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {NavBarComponent} from "./component/navbar.component";

@NgModule({
    imports: [ RouterModule ],
    declarations: [ NavBarComponent ],
    exports: [NavBarComponent]
})
export class NavbarModule {
}