import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductItemComponent } from './components/product-item/product-item.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProfileComponent } from './components/profile/profile.component'

import { ListProductItemsComponent } from './views/list-product-items/list-product-items.component';
import { HeaderComponent } from './views/header/header.component';
import { BannerComponent } from './views/banner/banner.component';
import { SpecialOffersComponent } from './views/special-offers/special-offers.component';
import { SideNavComponent } from './views/side-nav/side-nav.component';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { Page404Component } from './pages/page404/page404.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProductViewCompleteComponent } from './pages/product-view-complete/product-view-complete.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FooterComponent } from './views/footer/footer.component';
import { ChekoutPageComponent } from './pages/chekout-page/chekout-page.component';
import { SellerProfileComponent } from './pages/seller-profile/seller-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    LoginFormComponent,
    ListProductItemsComponent,
    HeaderComponent,
    BannerComponent,
    SpecialOffersComponent,
    SideNavComponent,
    HomepageComponent,
    Page404Component,
    ProfilePageComponent,
    ShoppingCartComponent,
    ProfileComponent,
    RegisterPageComponent,
    ProductViewCompleteComponent,
    LoginPageComponent,
    RegisterFormComponent,
    FooterComponent,
    ChekoutPageComponent,
    SellerProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
