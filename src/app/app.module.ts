import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule } from './view/view.module';
import { TestService } from './test.service';
import { UseTestComponent } from './use-test/use-test.component';
import { UseHttpComponent } from './use-http/use-http.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingDetailComponent } from './setting-detail/setting-detail.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    AddressCardComponent,
    UseTestComponent,
    UseHttpComponent,
    HomeComponent,
    SettingComponent,
    PageNotFoundComponent,
    SettingDetailComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModule,
    HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
