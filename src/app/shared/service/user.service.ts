import { Injectable } from '@angular/core';
import {User} from '../model/User';
import {ApiService} from './api.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {


  private _currentUser = new BehaviorSubject<User>(null);
  public currentUser =  this._currentUser.asObservable();

  constructor(protected api:ApiService) { }

  login(login:string, password:string):Observable<User> {
  return this.api.post('login', {email :login,password:password}).map(res =>{
  let user:User =  res as User;
  this._currentUser.next(user);
  return user;
  });
}

  logout(){
    this._currentUser.next(null);

  }



}
