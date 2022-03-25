
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';
import { UserService } from './service/user.service';
import { AdminComponent } from './component/admin/admin.component';
import { UserComponent } from './component/user/user.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { ProductService } from './service/product.service';
import { ReviewComponent } from './component/review/review.component';
import { PaymentComponent } from './component/payment/payment.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    AddProductComponent,
    EditProductComponent,
    ReviewComponent,
    PaymentComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
