import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './website/about/about.component';
import { AccessoriesComponent } from './website/accessories/accessories.component';
import { AccountComponent } from './website/account/account.component';
import { CartComponent } from './website/cart/cart.component';
import { CheckoutComponent } from './website/checkout/checkout.component';
import { ContactComponent } from './website/contact/contact.component';
import { HomeComponent } from './website/home/home.component';
import { LayoutComponent } from './website/layout/layout.component';
import { LoginComponent } from './website/login/login.component';
import { ProductDetailsComponent } from './website/product-details/product-details.component';
import { ProductComponent } from './website/product/product.component';
import { SignupComponent } from './website/signup/signup.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },

  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'account', component: AccountComponent },
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
