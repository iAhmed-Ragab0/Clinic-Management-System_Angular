import { DoctorUpdateComponent } from './components/doctor-update/doctor-update.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  { path: '', component:DoctorComponent },

    // {path:"", component:DoctorComponent},
    // {path:"update", },
    // {path:"delete", component:DoctorDeleteComponent},
    // {path:"details/:id", component:DoctorDetailsComponent}
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DoctorRoutingModule{}