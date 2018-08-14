import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/service/user.service';
import {User} from '../shared/model/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //user:User = null;
  login:string;
  password:string;


  constructor(
    protected userService:UserService,
    protected router:Router
  ) {
  }

  ngOnInit() {

  }


  onSubmit() {
    this.userService.login(this.login, this.password).subscribe((user:User) => {
    this.router.navigate(['/home']);
  }, err =>{
    console.log('error pas co');
  });
}
}
