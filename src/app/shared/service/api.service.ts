import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

  protected baseUrlApi = 'http://localhost:8000/';

  constructor(private http:HttpClient) { }

  get() {

  }

  post(url:string, params : Object = {}) : Observable<any> {
    return this.http.post(this.baseUrlApi+url,params);
  //  return {};
    // POST : http://localhost/atipkhouse/api/{url}
    // Appel post puis return
    //return {'firstname': 'Cassandre', 'lastname' : 'Cantet', 'id' : 3, 'civ' : 'Mr'};
  }

  put() {

  }

  delete() {

  }


}
