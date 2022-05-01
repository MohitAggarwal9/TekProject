import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UstaadjiService {
  userdata:any=[];
  cartdetails:any={};
  userCheckoutDetails:any={};
  cartitems:any
  
  constructor(private http:HttpClient) { }

  showCakeDetails(url:any){
    return this.http.get(url)
  }
  
  addCakeToCart(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }

  getCartItems(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }

  addUserAddress(user: any) {
    this.userdata.push(user);
  }

  placeOrder(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }

  getmyorders(url:any,body:any,options:any){
    return this.http.post(url,body,options)
  }

  getCartDetails(cartdata:any){
    return this.cartdetails=cartdata;
  }

  getUserDataFromAddressComponent(userdata:any){
    return this.userCheckoutDetails=userdata;
  }

  sendCartDetails() {
    console.log('CART DETAILS SERVICE', this.cartdetails);
    return this.cartdetails;
  }

  sendUserDetails() {
    return this.userCheckoutDetails;
  }

  ascending(data:any){
    data.sort((obj1:any,obj2:any)=>{
      return obj1.price-obj2.price
      })
      return data
  }

  descending(data:any){
    data.sort((obj1:any,obj2:any)=>{
      return obj2.price-obj1.price
      })
      return data
  }
  
}
