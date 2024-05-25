import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  UserGetUrl:string='http://localhost:3000/User'
  constructor(private http:HttpClient) { 
  }
  Users(){
    return this.http.get(this.UserGetUrl);
  }
  saveUser(data:any){
    return this.http.post(this.UserGetUrl,data)
  }
  deleteUser(id:any){
    return this.http.delete(`${this.UserGetUrl}/${id}`)           
  }
  user(){
    return[
      {
        name:"anil",
        age:28,
        email:"anil@gmail.com"
      },
      {
        name:"Milan",
        age:20,
        email:"milan@gmail.com"
      },
      {
        name:"Jeel",
        age:18,
        email:"jeel@gmail.com"
      },
      {
        name:"Meet",
        age:28,
        email:"meet@gmail.com"
      },
      {
        name:"Sagar",
        age:38,
        email:"sagar@gmail.com"
      },
      {
        name:"Sanket",
        age:28,
        email:"sanket@gmail.com"
      }
    ]
  }
}
