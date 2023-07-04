import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeUpdateComponent } from './Components/employee-update/employee-update.component';
import { ProfileModule } from '../profile/profile.module';
import { RouterModule } from '@angular/router';
import { FormsModule ,ReactiveFormsModule,} from '@angular/forms';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    CommonModule,
    ProfileModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports :[
    EmployeeUpdateComponent
  ]
})
export class EmployeeModule { }
