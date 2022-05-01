import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { MyordersComponent } from './myorders/myorders.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { AddcakeComponent } from './addcake/addcake.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login" , component:LoginComponent},
  {path:"signup" , component:SignupComponent},
  {path:"forgotpassword" , component:ForgotpasswordComponent},
  {path:"detail/:cakeid", component:CakedetailsComponent},
  {path:"search" , component:SearchComponent},
  {path:"cart",component:CartComponent},
  {path:"myorders",component:MyordersComponent},
  {path:"placeorder",component:PlaceorderComponent},
  {path:"addcake",component:AddcakeComponent},
  {path:"checkout",component:CheckoutComponent,
  children: [
    { path: 'address', component: AddressComponent },
    { path: 'payment', component: PaymentComponent },
  ]
  },
  {path:"**",component:PagenotfoundComponent}, // yeh last me rkhna , agr koi page na ho toh not found dikhaye or all routes handler
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
