import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './modules/cart/cart.module';
import { ShopModule } from './modules/shop/shop.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';

const materialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
];

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CartModule,
    ShopModule,
    BrowserAnimationsModule,
    ...materialComponents,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
