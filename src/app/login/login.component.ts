import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/service/user.service';
import {User} from '../shared/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = null;
  login:string;
  password:string;


  constructor(
    protected userService:UserService
  ) {
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.user = user);
  }


  onSubmit() {
    let res:boolean = this.userService.login(this.login, this.password);
    console.log(res);
  }
}
