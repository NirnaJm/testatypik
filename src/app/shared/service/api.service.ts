import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  protected baseUrlApi = 'http://localhost/atipkhouse/api/';

  constructor() { }

  get() {

  }

  post(url:string, params : Object) : Object {
    // POST : http://localhost/atipkhouse/api/{url}
    // Appel post puis return
    return {'firstname': 'Cassandre', 'lastname' : 'Cantet', 'id' : 3, 'civ' : 'Mr'};
  }

  put() {

  }

  delete() {

  }


}
