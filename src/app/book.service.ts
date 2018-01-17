import { Injectable } from '@angular/core';
import { Book } from './book/book';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'; //rxjs: Reactive extension of javascript
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BookService {
//DI: HTTP service inside my custom service...
  constructor(private _http:Http) { }
  getBooks() : Observable<any> {
    //res : HTTP response : Observable. Map operator will convert to json data
    return this._http.get('../assets/book.json')
    .map(this.extractData);
  }

  private extractData(res: Response){
    console.log("********" + res);
    let body = res.json()

    return body || {};
  }

  private handleError (error: any){
    let errMsg = (error.message) ? error.message: error.status ? '${error.status} - ${$error.statusText}': 'Server Error'
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
