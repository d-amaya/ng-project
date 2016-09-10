import {Component} from '@angular/core';

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
}