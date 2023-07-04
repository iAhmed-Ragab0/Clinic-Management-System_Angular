import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { APIService } from 'src/app/Shared/Services/api.service';
import { PatientModel } from '../../Model/patient-model';
import { PatientService } from '../../Services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
})
export class PatientDetailsComponent {
  constructor(
    private location: Location,
    public patientService: PatientService,
    public activatedRoute: ActivatedRoute,
    private http: APIService
  ) {}

  patients!: PatientModel;

  ngOnInit() {
    this.activatedRoute.params.subscribe((d) => {
      this.patientService.getById(d['id']).subscribe((data: any) => {
        this.patients = data.Data[0];
      });
    });
  }
  goBack() {
    this.location.back();
  }
  // ngOnInit() {
  //   this.activatedRoute.params.subscribe((d) => {
  //     this.http.getAllItem('patients/' + d['id']).subscribe((data: any) => {
  //       this.patients = data.Data[0];
  //       this.http
  //         // .getAllItem('appointments?booked=false') // all appo not booked
  //         .getAllItem('appointments?patient=' + this.patients._id) // all appo booked
  //         .subscribe((d: any) => {
  //           console.log(d);
  //           this.http
  //             .updateItem('appointments/book/' + d['id'], {
  //               // update
  //               booked: true,
  //               patient: this.patients._id,
  //             })
  //             .subscribe((l) => {
  //               console.log(l);
  //             });
  //         });
  //     });
  //   });
  // }
}
