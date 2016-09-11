import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
    isLoggedIn = false;

    login(username, password) {
        // This should use a logging API implementation, but this is just for demonstration.
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }
}