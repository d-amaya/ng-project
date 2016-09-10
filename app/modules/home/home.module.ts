import {NgModule} from "@angular/core";

import {HomeComponent} from "./component/home.component";

@NgModule({
    declarations:[HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {
}