import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HomeComponent } from './components/home/home.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  
  
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactFormComponent},
  {path:'users', component:UsersComponent, 
  children:[
    {path:':id',component:UserDetailComponent}]},
  {path:'products', component:ProductsComponent, 
  children:[
    {path:':id',component:ProductDetailComponent}]},
  {path:'orders', component:OrdersComponent, 
  children:[
    {path:':id',component:OrderDetailComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
