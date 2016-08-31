import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

import {User} from "./../../../entity/user";

@Injectable()
export class UsersService {

    private USERS_URL = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http) {
    }

    getUsers(): Observable<any> {
        return this._http
                   .get(this.USERS_URL)
                   .map(response => response.json());
    }

    getUser(userId): Observable<any> {
        return this._http
                   .get(this.getUserUrl(userId))
                   .map(response => response.json());
    }

    createUser(user: User) {
        return this._http
                   .post(this.USERS_URL, JSON.stringify(user))
                   .map(response => response.json());
    }

    updateUser(userId, user: User) {
        return  this._http
                    .put(this.getUserUrl(userId),JSON.stringify(user))
                    .map(response => response.json());
    }

    deleteUser(userId) {
        return this._http
                   .delete(this.getUserUrl(userId))
                   .map(response => response.json());
    }

    private getUserUrl(userId) {
 		return this.USERS_URL + "/" + userId;
 	}
}