import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UstaadjiService } from '../ustaadji.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  userdetails: any;
  totalPrice: any;
  cakes: any;
  orderdetails: any = {};

  constructor(
    private ustaad:UstaadjiService,
    private http: HttpClient
  ) {
    let cartdetails = this.ustaad.sendCartDetails();
    this.userdetails = this.ustaad.sendUserDetails();
    this.totalPrice = cartdetails.totalPrice;
    this.cakes = cartdetails.cartitems;
    console.log('cart details', cartdetails);
  }
  
  placeOrder() {
    var url = 'https://apifromashu.herokuapp.com/api/addcakeorder';
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append('authtoken', localStorage['token']);
    var options = {
      headers: myheaders,
    };
    var body = {
      cakes: this.cakes,
      price: this.totalPrice,
      name: this.userdetails.name,
      address: this.userdetails.address,
      city: this.userdetails.city,
      pincode: this.userdetails.pincode,
      phone: this.userdetails.phone,
    };
    this.ustaad.placeOrder(url, body, options).subscribe({
      next: (response: any) => {
        console.log('Response from add cake order api', response);
        this.orderdetails = response.order;
      },
      error: (error: any) => {
        console.log('Error from place order api', error);
      },
    });
  }

  ngOnInit(): void {}
}