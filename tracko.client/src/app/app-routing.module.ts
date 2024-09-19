import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

import { AddCategoryComponent } from './admin/category/add-category/add-category.component';
import { CategoryDetailsComponent } from './admin/category/category-details/category-details.component';
import { CategoryListComponent } from './admin/category/category-list/category-list.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { AuthGuard } from './auth/auth.guard';
import { AboutComponent } from './website/about/about.component';
import { AccessoriesComponent } from './website/accessories/accessories.component';
import { AccountComponent } from './website/account/account.component';
import { CartComponent } from './website/cart/cart.component';
import { CheckoutComponent } from './website/checkout/checkout.component';
import { ContactComponent } from './website/contact/contact.component';
import { ForbiddenComponent } from './website/forbidden/forbidden.component';
import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './website/login/login.component';
import { ProductDetailsComponent } from './website/product-details/product-details.component';
import { ProductComponent } from './website/product/product.component';
import { SignupComponent } from './website/signup/signup.component';

const routes: Routes = [
  // { path: '', component: LayoutComponent },

  {
    path: 'home',
    component: HomeComponent,
    children: [
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
    ],
  },

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,

    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
    children: [
      { path: 'category', component: CategoryListComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'edit-category/:id', component: EditCategoryComponent },
      { path: 'category-details/:id', component: CategoryDetailsComponent },
    ],
  },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // This scrolls to the top on navigation
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
