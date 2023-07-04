import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { APIService } from 'src/app/Shared/Services/api.service';
import { PatientService } from '../../Services/patient.service';
import { Appointment } from '../../Model/appointment';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss'],
})
export class BookAppointmentComponent {
  constructor(
    private location: Location,
    public patientService: PatientService,
    public activatedRoute: ActivatedRoute,
    private http: APIService
  ) {}

  // patients!: PatientModel;

  apponitment: Appointment[] = [];
  default = [
    {
      _id: 0,
      clinic: {
        _id: 0,
        location: {
          city: '',
          street: '',
          building: 0,
        },
        mobilePhone: '',
      },
      doctor: {
        _id: 0,
        firstName: '',
        lastName: '',
        specialty: {
          specialty: '',
        },
      },
      patient: {
        _id: 0,
        firstName: '',
        lastName: '',
        age: 0,
      },
      booked: false,
      date: '',
      timeFrom: '',
      timeTo: '',
    },
  ];

  patientId = localStorage.getItem('id');

  ngOnInit() {
    this.activatedRoute.params.subscribe((d) => {
      this.http
        .getAllItem('appointments?booked=false') // all appo not booked
        .subscribe((data: any) => {
          if (data.Data.length != 0) {
            this.apponitment = data.Data;
            console.log(this.apponitment);
          } else {
            this.apponitment = this.default;
          }
        });
    });
  }

  book(id: number) {
    if (confirm('Are you sure')) {
      this.http
        .updateItem('appointments/book/' + id, {
          booked: true,
          patient: this.patientId,
        })
        .subscribe((l) => {
          console.log(l);
        });
    }
  }

  goBack() {
    this.location.back();
  }
}
