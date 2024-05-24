import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template_driven_form';
  Users:any[]=[]
  SignupUser(value:any){
    if((value.value.name !=""&&value.value.email !=""&&value.value.password!="")){
      console.log(value.value);
      this.Users.push(value.value)
      value.reset()
    }
    console.log(this.Users);
  }
  
}
