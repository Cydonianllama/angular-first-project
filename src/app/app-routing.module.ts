import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomepageComponent} from './pages/homepage/homepage.component';
import {Page404Component} from './pages/page404/page404.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component'
import {RegisterPageComponent} from './pages/register-page/register-page.component'
import {ProductViewCompleteComponent} from './pages/product-view-complete/product-view-complete.component'
import {LoginPageComponent} from './pages/login-page/login-page.component'
import {ChekoutPageComponent} from './pages/chekout-page/chekout-page.component'
import {SellerProfileComponent} from './pages/seller-profile/seller-profile.component'

const routes: Routes = [
  { path: '', redirectTo : '/home',pathMatch : 'full'},
  { path: 'home', component: HomepageComponent},
  { path: 'register' , component : RegisterPageComponent },
  { path: 'profile' , component : ProfilePageComponent},
  { path: 'login' , component : LoginPageComponent},
  { path: 'checkout' , component : ChekoutPageComponent},
  { path: 'product/:id' , component : ProductViewCompleteComponent},
  { path: 'seller/:nameseller' , component : SellerProfileComponent},
  { path: '**' , component : Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
