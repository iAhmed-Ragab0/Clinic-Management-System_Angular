import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicUpdateComponent } from './Components/clinic-update/clinic-update.component';
import { ClinicAddComponent } from './Components/clinic-add/clinic-add.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ClinicsListComponent } from './Components/clinics-list/clinics-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ClinicDetailsComponent } from './Components/clinic-details/clinic-details.component';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [
    ClinicUpdateComponent,
    ClinicAddComponent,
    ClinicsListComponent,
    ClinicDetailsComponent,
    ConfirmComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  exports:[
    ClinicUpdateComponent,
    ClinicAddComponent,
    ClinicsListComponent,
  ],
  bootstrap: [ClinicsListComponent]
})
export class DClinicsModule {
}
