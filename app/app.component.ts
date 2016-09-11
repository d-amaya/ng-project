import {Component} from '@angular/core';

import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard.service";

@Component({
	selector: "my-app",
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        .container div.content-div {
            padding: 30px;
        }
    `]
})
export class AppComponent {

    // This sould be done in a logging form, but this is just for demonstration.
    constructor(private _authServie: AuthService) {
        _authServie.login("username", "password");
    }
}