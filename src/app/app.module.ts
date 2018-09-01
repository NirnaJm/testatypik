import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ApiService} from './shared/service/api.service';
import {UserService} from './shared/service/user.service';
import { AlertModule } from 'ngx-bootstrap';

import  {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsHomeComponent } from './details-home/details-home.component';
import { HeaderComponent } from './header/header.component';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { LocationComponent } from './location/location.component';
import { ActivitiesComponent } from './activities/activities.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'accommodations', component: AccommodationsComponent},
  {path: 'location', component: LocationComponent},
  {path: 'activities', component: ActivitiesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    DetailsHomeComponent,
    HeaderComponent,
    AccommodationsComponent,
    LocationComponent,
    ActivitiesComponent,

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule, AlertModule.forRoot()
  ],
  providers: [
    ApiService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
