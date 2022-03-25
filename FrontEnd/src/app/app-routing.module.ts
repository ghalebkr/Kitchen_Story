import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { AdminComponent } from './component/admin/admin.component';
import { ContactComponent } from './component/contact/contact.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PaymentComponent } from './component/payment/payment.component';
import { RegisterComponent } from './component/register/register.component';
import { ReviewComponent } from './component/review/review.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent }, 
  { path: 'user', component: UserComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'editProduct', component: EditProductComponent},
  { path: 'review', component: ReviewComponent},
  { path: 'payment', component: PaymentComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
