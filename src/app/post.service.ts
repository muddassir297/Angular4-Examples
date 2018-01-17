import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './post/post';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; //handle Error


@Injectable()
export class PostService {

  constructor(private _http:Http) { }

  getSpecificPosts(pid:number):Observable<any> {
    return this._http.get('http://jsonplaceholder.typicode.com/posts/'+pid)
    .map(this.extractData).catch(this.handleError);
  }

  getPosts ():Observable<any>{

    return this._http.get('http://jsonplaceholder.typicode.com/posts')
    .map(this.extractData)
  }

private extractData(res: Response){
    let body = res.json()

    return body || {};
  }

  private handleError (error: any){
    let errMsg = (error.message) ? error.message: error.status ? '${error.status} - ${$error.statusText}': 'Server Error'
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
