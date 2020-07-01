import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {ProviderLoginComponent} from './components/provider-login/provider-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { KitchenListComponent } from './components/kitchen-list/kitchen-list.component';
import { ViewMenuComponent } from './components/view-menu/view-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { MainComponent} from './components/main/main.component';
import { ProviderHomeComponent } from './components/provider-home/provider-home.component';
import { ProviderRegistrationComponent} from './components/provider-registration/provider-registration.component';
import { from } from 'rxjs';


const routes: Routes = [
 // { path: '', redirectTo: '/userregister', pathMatch: 'full' },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
 { path: 'main', component: MainComponent },
  { path: 'userhome', component: UserHomeComponent },
  { path: 'userregister', component: UserRegistrationComponent },
  { path: 'kitchens', component: KitchenListComponent },
  { path: 'kitchens/:id', component: ViewMenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'providerhome', component: ProviderHomeComponent },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'providerlogin', component: ProviderLoginComponent },
  { path: 'providerregister', component: ProviderRegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserHomeComponent,
  UserRegistrationComponent,
  KitchenListComponent,
  ViewMenuComponent,
  CartComponent,
  ProviderHomeComponent,
  MainComponent,
  UserLoginComponent,
  ProviderLoginComponent,
  ProviderRegistrationComponent
  
]