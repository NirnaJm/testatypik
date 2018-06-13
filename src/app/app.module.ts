import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ApiService} from './shared/service/api.service';
import {UserService} from './shared/service/user.service';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule
  ],
  providers: [
    ApiService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
