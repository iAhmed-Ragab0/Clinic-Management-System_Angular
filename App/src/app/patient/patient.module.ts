import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { PatientUpdateComponent } from './Components/patient-update/patient-update.component';
import { PatientDetailsComponent } from './Components/patient-details/patient-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PatientRoutingModule } from './patient-routing.module';
import { ProfileModule } from '../profile/profile.module';
import { BookAppointmentComponent } from './Components/book-appointment/book-appointment.component';
import { PNavComponent } from './Components/p-nav/p-nav.component';

@NgModule({
  declarations: [
    PatientComponent,
    PatientUpdateComponent,
    PatientDetailsComponent,
    BookAppointmentComponent,
    PNavComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PatientRoutingModule,
    ProfileModule,
  ],
  exports: [
    PatientComponent,
    PatientUpdateComponent,
    PatientDetailsComponent,
    BookAppointmentComponent,
  ],
  // bootstrap:[PatientComponent]
})
export class PatientModule {}
