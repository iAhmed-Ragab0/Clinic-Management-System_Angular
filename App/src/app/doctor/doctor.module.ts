import { DoctorRoutingModule } from './doctor-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModule } from '../profile/profile.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DoctorUpdateComponent } from './components/doctor-update/doctor-update.component';
import { DoctorComponent } from './doctor/doctor.component';
// import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    DoctorUpdateComponent,
    DoctorComponent,
  ],
  imports: [
    CommonModule,
    ProfileModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    DoctorRoutingModule,
    // NgxPaginationModule,
    MatTableModule

  ],
  exports: [
    DoctorUpdateComponent,
    DoctorComponent,
  ]
})
export class DoctorModule { }
