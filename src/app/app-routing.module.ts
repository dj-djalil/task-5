import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDetailsComponent} from "./add-details/add-details.component";
import{ViewDetailComponent } from "./view-detail/view-detail.component";
import {RouterModule, Routes } from '@angular/router';


const routes :Routes = [
  {
    path : 'form',component: AddDetailsComponent },
  { path : 'view',component: ViewDetailComponent},
   {path :'', redirectTo:'/form' , pathMatch:'full' }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
