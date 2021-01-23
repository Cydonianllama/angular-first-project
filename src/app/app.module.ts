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
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
