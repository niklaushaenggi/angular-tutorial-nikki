import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { MouseEventDisplayComponent } from './mouse-event-display/mouse-event-display.component';
import {FormsModule} from '@angular/forms';
// import {HttpClientModule} from '@angular/common/http';
// import { AuctionListDetailComponent } from './auction-list-detail/auction-list-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuctionDataService} from './shared/auction-data.service';
import {AuctionListDetailComponent} from './auction-list-detail/auction-list-detail.component';
// import {AngularDateHttpInterceptor} from "./shared/angular-date-http-interceptor.component";
import {AngularDateHttpInterceptorService} from './shared/angular-date-http-interceptor.service';
import {AppRoutingModule} from './app-routing.module';
import {HelperService} from './shared/helper.service';
import { AuctionDetailComponent } from './auction-detail/auction-detail.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    AuctionListComponent,
    MouseEventDisplayComponent,
    AuctionListDetailComponent,
    AuctionDetailComponent,
    HomeComponent,
    NavBarComponent


  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AngularDateHttpInterceptorService,
    multi: true
  }, AuctionDataService, HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
