import { Component, OnInit } from '@angular/core';
import { UstaadjiService } from '../ustaadji.service';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})

export class CakelistComponent implements OnInit { 
  constructor(private Angularustaad : UstaadjiService , private http : HttpClient , private ngxService: NgxUiLoaderService) {
    var url="https://apifromashu.herokuapp.com/api/allcakes"
    this.http.get(url).subscribe({
      next:(response: any)=>{
        console.log("response from all cakes api",response)
        this.cakes=response.data
      },
      error:(error)=>{
        console.log("Error from all the cakes api",error)
      }
    })
   }

   ngOnInit(): void {
    this.ngxService.start(); // start foreground spinner 
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner 
    }, 1000);
  }
  
  asecSort(){
    this.cakes = this.Angularustaad.ascending(this.cakes)
  }
  descSort(){
    this.cakes = this.Angularustaad.descending(this.cakes)
  }
  cakes:any=[]
  

}
