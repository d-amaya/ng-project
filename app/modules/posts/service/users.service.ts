import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class UsersService {

    private USERS_URL = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http) {
    }

    getUsers(): Observable<any> {
        return this._http
                   .get(this.USERS_URL)
                   .map(users => users.json());
    }

}