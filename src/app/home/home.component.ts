import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/service/user.service';
import {User} from "../shared/model/User";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User;

  constructor(protected userService:UserService) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(user=> this.user=user);
  }

}
