import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { KitchenListComponent } from './components/kitchen-list/kitchen-list.component';
import { ViewMenuComponent } from './components/view-menu/view-menu.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './components/cart/cart.component';
import { ProviderHomeComponent } from './components/provider-home/provider-home.component';
import { MainComponent } from './components/main/main.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ProviderLoginComponent } from './components/provider-login/provider-login.component';
import { ProviderRegistrationComponent } from './components/provider-registration/provider-registration.component';

 
@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserHomeComponent,
    routingComponents,
    KitchenListComponent,
    ViewMenuComponent,
    NavComponent,
    CartComponent,
    ProviderHomeComponent,
    MainComponent,
    UserLoginComponent,
    ProviderLoginComponent,
    ProviderRegistrationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
