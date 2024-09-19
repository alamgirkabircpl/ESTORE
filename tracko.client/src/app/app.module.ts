import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this module
import { ToastrModule } from 'ngx-toastr'; // Toastr module

import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { CategoryDetailsComponent } from './admin/category/category-details/category-details.component';
import { CategoryListComponent } from './admin/category/category-list/category-list.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CategoryService } from './services/category/category.service';
import { AboutComponent } from './website/about/about.component';
import { CartComponent } from './website/cart/cart.component';
import { CheckoutComponent } from './website/checkout/checkout.component';
import { ContactComponent } from './website/contact/contact.component';
import { FooterComponent } from './website/footer/footer.component';
import { ForbiddenComponent } from './website/forbidden/forbidden.component';
import { HeaderComponent } from './website/header/header.component';
import { HeroComponent } from './website/hero/hero.component';
import { HomeComponent } from './website/home/home.component';
import { LayoutComponent } from './website/layout/layout.component';
import { LoginComponent } from './website/login/login.component';
import { NavbarComponent } from './website/navbar/navbar.component';
import { ProductDetailsComponent } from './website/product-details/product-details.component';
import { ProductComponent } from './website/product/product.component';
import { SignupComponent } from './website/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminDashboardComponent,
    NavbarComponent,
    ForbiddenComponent,
    LayoutComponent,
    SignupComponent,
    LoginComponent,
    ContactComponent,
    HeroComponent,
    AboutComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    ProductDetailsComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    CategoryDetailsComponent,
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // Import BrowserAnimationsModule

    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Set position class for toasts
      timeOut: 1000, // Duration of toast visibility in milliseconds

      progressAnimation: 'increasing', // Animation type for progress bar
    }),
    AppRoutingModule,
  ],
  providers: [
    CategoryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
