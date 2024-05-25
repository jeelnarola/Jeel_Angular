import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  title = 'Service';
  users:any
  UserDataSubmit:boolean=false
  constructor(private userdata:UserdataService){
    // this.users=this.userdata.user()
    userdata.Users().subscribe((data)=>{
      console.log(data);
      
      this.users=data
      
    })
    // userdata.saveUser()
  }
  ngOnInit(): void {
    this.userdata.Users().subscribe((data)=>{
      console.log(data);
      
      this.users=data
      
    })

  }
  
  UserForm:any=new FormGroup({
    UserName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]+$')]),
    Age:new FormControl('',[Validators.required]),
    Email:new FormControl('',[Validators.required,Validators.email,Validators.pattern('[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}')])
  })
  UserFormSubmit(){
    if(this.UserForm.invalid){
      this.UserDataSubmit=true
    }
    else{
      this.UserDataSubmit=false
      this.userdata.saveUser({
        
        name:this.UserForm.value.UserName,
        age:this.UserForm.value.Age,
        email:this.UserForm.value.Email
      }).subscribe((result)=>{
        console.log("result",result);
      })
      this.UserForm.reset()
    }
    
  }
  
  get Uservalidor(){return this.UserForm.get('UserName') }
  get AgeValidators(){return this.UserForm.get('Age')}
  get EmailValidator(){return this.UserForm.get('Email')}
}
