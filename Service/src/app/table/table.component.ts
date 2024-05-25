import { Component } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  users:any
  constructor(private userdata:UserdataService){
    
    // userdata.saveUser()
  }
  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    this.userdata.Users().subscribe((data)=>{
      this.users=data 
    })
  }
  deletebtn(id:any){
    this.userdata.deleteUser(id).subscribe((result)=>{
      this.getUser()
    })
  }
}
