import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MedicineListComponent } from './Components/medicine-list/medicine-list.component';
import { MedicineAddComponent } from './Components/medicine-add/medicine-add.component';
import { MedicineRoutingModule } from './medicine-routing.module';
import { MedicineEditComponent } from './Components/medicine-edit/medicine-edit.component';



@NgModule({
  declarations: [
       MedicineListComponent,
       MedicineAddComponent,
       MedicineEditComponent,
  ],
  imports: [
    CommonModule,
    MedicineRoutingModule,
    FormsModule

  ],
  exports:[
    MedicineListComponent,
    MedicineAddComponent
  ]
})
export class MedicineModule { }
