import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomepageComponent} from './pages/homepage/homepage.component';
import {Page404Component} from './pages/page404/page404.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component'
import {RegisterPageComponent} from './pages/register-page/register-page.component'

const routes: Routes = [
  { path: '', redirectTo : '/home',pathMatch : 'full'},
  { path: 'home', component: HomepageComponent},
  { path: 'register' , component : RegisterPageComponent },
  { path: 'profile' , component : ProfilePageComponent},
  { path: '**' , component : Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
