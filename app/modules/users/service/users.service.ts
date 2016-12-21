import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

import {User} from "./../../../entity/user";

@Injectable()
export class UsersService {

    //private USERS_URL = "http://jsonplaceholder.typicode.com/users";
    private USERS_URL = "http://gtr2-sura.ceiba.com.co:80/users";
    private HEADERS = new Headers({ 'Content-Type': 'application/json' });
    private OPTIONS = new RequestOptions({ headers: this.HEADERS })

    constructor(private _http: Http) {
    }

    getUsers(): Observable<any[]> {
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
                   .post(this.USERS_URL, JSON.stringify(user), this.OPTIONS)
                   .map(response => response.json());
    }

    updateUser(userId, user: User) {
        return  this._http
                    .put(this.getUserUrl(userId),JSON.stringify(user), this.OPTIONS)
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
