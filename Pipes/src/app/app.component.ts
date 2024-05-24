import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  search:string=''
  Uppercasepipes:string="Uppercase-pipes"
  Lowercasepipes:string="Lowercase-Pipes"
  Capitalizepipes:string="capitalize-pipes"
  Datepipe:Date=new Date()
  amount:number=1000
  decimalpipe:number=123456789
  percentpipe:number=0.25
  silcepipe:string="i am jeel narola"
  jsonpipe:any[]=[
    {
      FirstName:"jeel",
      LastName:"narola",
    },
    {
      FirstName:"Vishal",
      LastName:"Gohil ",
    }
  ]
  arry:any[]=["jeel","vishal","meet","paras"]

  filterPipes:any[]=[
    {
      sno:1,
      name:"mobile",
      price:"700"
    },
    {
      sno:2,
      name:"TV",
      price:"400"
    },
    {
      sno:3,
      name:"Leptop",
      price:"4000"
    },
    {
      sno:4,
      name:"Bike",
      price:"70000"
    },
    {
      sno:5,
      name:"Bike2",
      price:"50000"
    },
    {
      sno:6,
      name:"Bike3",
      price:"90000"
    },
    {
      sno:7,
      name:"car",
      price:"200000"
    },
    {
      sno:8,
      name:"watch",
      price:"100"
    }
  ]
  // arry:any="jeel"
}
