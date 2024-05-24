import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Signup=new FormGroup({
    Username:new FormControl('',[Validators.required,Validators.pattern('[a-z]+$'),Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
    gender:new FormControl('',[Validators.required]),
    kabadi:new FormControl('',[Validators.required])
  })
  title = 'Reactive_Form';
  submitbtn:boolean=false;

  // Signup:FormGroup=new FormGroup({
  //   StudentList:new FormArray([])
  // })
  // getStudentFields():FormGroup{
  //   return new FormGroup({
  //     Username:new FormControl('',[Validators.required,Validators.pattern('[a-z]+$'),Validators.minLength(3)]),
  //     email:new FormControl('',[Validators.required,Validators.email]),
  //     password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8)])
  //   })
  // }

  // StudentsArray(){
  //   return this.Signup.get('StudentList') as FormArray
  // }
  // addInput(){
  //   console.log("sunction",this.getStudentFields());
    
  //   this.StudentsArray().push(this.getStudentFields())
  // }
  // removeinput(i:number){
  //   this.StudentsArray().removeAt(i)
  // }
  loginForm(){
    console.log(this.Signup.value);
    if(this.Signup.invalid){
      this.submitbtn=true
    }
    else{
      this.submitbtn=false
      this.Signup.reset()
    }
    
  }
  get userValidator(){return this.Signup.get('Username')}
  get emailValidator(){return this.Signup.get("email")}
  get passwordValidator(){return this.Signup.get("password")}
  get genderValidator(){return this.Signup.get("gender")}
}
