import { Component } from '@angular/core';
import {ApiService} from './shared/service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    protected api: ApiService
  ) {
   this.api.username;
  }
}
