import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { HttpClient } from '@angular/common/http';
import { FormBuilder , FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userdetails:any={
  }
  users:any=[]
  signupForm:any

  constructor(private toastr: ToastrService , private ngxService: NgxUiLoaderService , private http : HttpClient ,private formbuilder:FormBuilder) {
    this.signupForm=this.formbuilder.group({
      formvalid:['',[Validators.required,Validators.email]]
    })
   }

  responseError:any
  signup(){

    if(this.signupForm.valid){
      alert()
    }
    else{
      return
    }
    
    // var temp={...this.userdetails} //spread operator
    // this.users.push(temp) //pushing values to table or array

    // var url="https://apifromashu.herokuapp.com/api/register"
    // this.http.post(url,this.userdetails).subscribe({
    //   next:(response: any)=>{
    //     console.log("response from users api",response)
    //     // this.userdetails.name=response.name,
    //     // this.userdetails.email=response.email,
    //     // this.userdetails.password=response.password
    //     if(response.message==="User Already Exists"){
    //       this.responseError="User Already Exists"
    //       this.toastr.warning('Same account exists')
    //     }
    //     else{
    //       this.responseError=""
    //       this.toastr.success('Successfully Signup') //toaster(popup like done,success)
    //     }
    //   },
    //   error:(error)=>{
    //     console.log("Error from users api",error)
    //   }
    // })
   }

  deleteUser(i:any){
    alert(i)
  }
  
  ngOnInit(): void {
    this.ngxService.start(); // start foreground spinner 
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner 
    }, 2000);
  }
}
