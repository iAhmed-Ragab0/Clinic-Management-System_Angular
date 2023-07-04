import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PatientComponent } from './patient.component';
import { PatientDetailsComponent } from './Components/patient-details/patient-details.component';
import { PatientUpdateComponent } from './Components/patient-update/patient-update.component';
import { BookAppointmentComponent } from './Components/book-appointment/book-appointment.component';

const routes: Routes = [
  { path: '', component: PatientComponent },
  { path: 'details', component: PatientDetailsComponent },
  { path: 'update', component: PatientUpdateComponent },
  { path: 'bookAppointment', component: BookAppointmentComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
