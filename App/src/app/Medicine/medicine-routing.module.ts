import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from "@angular/router";
import { MedicineListComponent } from './Components/medicine-list/medicine-list.component';
import { MedicineAddComponent } from './Components/medicine-add/medicine-add.component';




const routes :Routes = [
  {path:"" ,component:MedicineListComponent},
  {path:"add" ,component:MedicineAddComponent},


];



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class MedicineRoutingModule { }
