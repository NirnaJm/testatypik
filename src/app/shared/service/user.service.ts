import { Injectable } from '@angular/core';
import {User} from '../model/User';
import {ApiService} from './api.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {


  private _currentUser = new BehaviorSubject<User>(null);
  public currentUser =  this._currentUser.asObservable();

  constructor(protected api:ApiService) { }

  login(login:string, password:string):boolean {
    let user:User = this.api.post('login', {login :login,password:password}) as User;

    if (user) {
      this._currentUser.next(user);
      return true;
    }

    return false;
    // '1' => cast number : 1
    // false => cast number
    // 'vhjkrdgkjhb' => boolean ?
  }

}
