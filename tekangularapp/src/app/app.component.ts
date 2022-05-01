import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tekangularapp';
  friends=[
    "h","e","l","l","o"
  ]
  trainees:any=[{
    name:"a",
    salary:"1crore",
  },{
    name:"b",
    salary:"1crore",
  },{
    name:"c",
    salary:"1crore",
  },{
    name:"d",
    salary:"1crore",
  }]
}
