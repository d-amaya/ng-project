import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class PostsService {

    //private POSTS_URL = "http://jsonplaceholder.typicode.com/posts";
    private POSTS_URL = "http://54.71.165.246:8080/posts";

    constructor(private _http: Http) {
    }

    getPosts(userId?): Observable<any> {
        var url = this.POSTS_URL;
        if (userId) {
            url += `?userId=${userId}`;
        }
        return this._http
                   .get(url)
                   .map(posts => posts.json());
    }

    getPostComments(idPost): Observable<any> {
        return this._http
                   .get(this.getCommentsUrl(idPost))
                   .map(comments => comments.json());
    }

    private getCommentsUrl(idPost) {
        return this.POSTS_URL + "/" + idPost + "/comments";  
    }
}
