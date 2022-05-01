import { Component } from "@angular/core";
// import { UstaadjiService } from "../ustaadji.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { UstaadjiService } from "../ustaadji.service";
import { HttpHeaders } from "@angular/common/http";

@Component({
    selector :"app-navbar",
    templateUrl: "./navbar.component.html",
    // providers : UstaadjiService,
})
export class NavbarComponent{
    projecttitle:any="Kitchen's Store"
    searchtext:any
    isloggedin:any
    length: any
    response:any
    
    constructor(private toastr: ToastrService, private router: Router, private ustaad: UstaadjiService  ){
        this.isloggedin=localStorage["token"]?true:false
        if(this.isloggedin){
            var url = "https://apifromashu.herokuapp.com/api/cakecart"
            var headers = new HttpHeaders()
            headers = headers.append("authtoken",localStorage["token"])
            var body = {}
            var options = {
               headers:headers
            }
            this.ustaad.getCartItems(url,body,options).subscribe({
               next:(response:any)=>{
                  console.log("response from cart items api in navbar", response)
                  this.ustaad.cartitems = response.data
                  this.length =  response.data?.length
               }
            })
         }
    }

    ngDoCheck(){
        if(localStorage["token"]){
            this.isloggedin = true 
            this.length =  this.ustaad.cartitems?.length
        }
        else{
            this.isloggedin = false
        }
    }

    search(){
        // this.toastr.warning('Mai ni dhundta')
        // alert(this.searchtext)   
        if(this.searchtext)
        this.router.navigate(["/search"], {queryParams:{q:this.searchtext}})
    }   //query param is question mark and q is query variable
    
    logout(){
        localStorage.clear();
        this.toastr.success('Logged out successfully')
    }
    
}