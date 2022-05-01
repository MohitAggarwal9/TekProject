import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UstaadjiService } from '../ustaadji.service';


@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css'],
})
export class MyordersComponent implements OnInit {
  myorders: any = [];
  constructor(
    private ustaad:UstaadjiService,
    private http: HttpClient,
    private toastr: ToastrService,
  ) {
    var url = 'https://apifromashu.herokuapp.com/api/cakeorders';
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append('authtoken', localStorage['token']);
    var options = {
      headers: myheaders,
    };
    var body = {};
    this.ustaad.getmyorders(url, body, options).subscribe({
      next: (response: any) => {
        console.log('Response from add my orders api', response);
        this.myorders = response.cakeorders;
        console.log('MY ORDERS', this.myorders);
      },
      error: (error: any) => {
        console.log('Error from my orders api', error);
      },
    });
  }
  return(){
    this.toastr.success('Happy Shopping') 
  }

  ngOnInit(): void {}
}