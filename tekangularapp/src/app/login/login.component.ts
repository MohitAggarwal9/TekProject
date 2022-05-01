import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : HttpClient , private router: Router,private toastr: ToastrService) { }

  userdetails:any={

  }
  // isloggedin:any
  responseError:any
  
  login(){
    var url="https://apifromashu.herokuapp.com/api/login"
    this.http.post(url,this.userdetails).subscribe({
      next:(response: any)=>{
        console.log("response from login users api",response)
        // this.userdetails.email=response.email,
        // this.userdetails.password=response.password
        if(response.token){
          localStorage["token"]=response.token
          this.router.navigate(["/"])
          this.toastr.success('Successfully Logged In') 
        }
        else{
          this.responseError = "Invalid Login"
          this.toastr.warning('Invalid Login') 
        }
      },
      error:(error)=>{
        console.log("Error from users api",error)
      }
    })
    // if(localStorage["token"]){
    //   this.router.navigate(["/"])
    // }
    // else{
    //   this.router.navigate(["/login"])
    // }
  }

 
  ngOnInit(): void {
  }
}
