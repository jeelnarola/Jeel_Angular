import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:"",
    component:TableComponent
  },
  {
    path:"UserForm",
    component:UserFormComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
