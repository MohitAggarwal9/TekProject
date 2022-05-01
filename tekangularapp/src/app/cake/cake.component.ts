import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() cakedata : any=[]
  constructor(private router: Router){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>",this.cakedata)
  }
  showCakeDetails(){
    // console.log(this.cakedata.cakeid)
    this.router.navigate(['/detail',this.cakedata.cakeid])
  }
     
  ngOnInit(){
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>..................",this.cakedata)
  }
}
