import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './website/navbar/navbar.component';
import { HeaderComponent } from './website/header/header.component';
import { HomeComponent } from './website/home/home.component';
import { FooterComponent } from './website/footer/footer.component';
import { AccessoriesComponent } from './website/accessories/accessories.component';
import { AboutComponent } from './website/about/about.component';
import { ContactComponent } from './website/contact/contact.component';
import { LoginComponent } from './website/login/login.component';
import { SignupComponent } from './website/signup/signup.component';
import { CartComponent } from './website/cart/cart.component';
import { CheckoutComponent } from './website/checkout/checkout.component';
import { ProductComponent } from './website/product/product.component';
import { ProductDetailsComponent } from './website/product-details/product-details.component';
import { AccountComponent } from './website/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AccessoriesComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    CheckoutComponent,
    ProductComponent,
    ProductDetailsComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
