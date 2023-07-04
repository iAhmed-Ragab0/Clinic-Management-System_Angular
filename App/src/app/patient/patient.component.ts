import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../Shared/Services/api.service';

import { PatientModel } from './Model/patient-model';
import { PatientService } from './Services/patient.service';
import { Appointment } from './Model/appointment';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent {
  constructor(
    public patientService: PatientService,
    public activatedRoute: ActivatedRoute,
    private http: APIService
  ) {}

  patients!: PatientModel;
  apponitment: Appointment[] = [];

  ngOnInit() {
    this.activatedRoute.params.subscribe((d) => {
      this.patientService.getById(d['id']).subscribe((data: any) => {
        this.patients = data.Data[0];

        //get all appointment booked
        this.http
          .getAllItem('appointments?patient=' + this.patients._id)
          .subscribe((d: any) => {
            this.apponitment = d.Data;
            console.log(this.apponitment);
          });
      });
    });
  }
  cancel(id: number) {
    this.http
      .updateItem('appointments/book/' + id, {
        booked: false,
        patient: -1,
      })
      .subscribe((l) => {
        console.log(l);
      });
  }
}
