import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';

import {CurrencyService} from './currency.service';
import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';
import { CurrencyWrapperComponent } from './currency-wrapper/currency-wrapper.component';






@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    CurrencyDetailComponent,
    PageNavigationComponent,
    CurrencyWrapperComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    HttpClientModule,
    AppRoutingModule,
    JsonpModule

  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
