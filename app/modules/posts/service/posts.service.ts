import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class PostsService {

    private POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

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