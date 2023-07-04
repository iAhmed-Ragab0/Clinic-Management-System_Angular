import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { PatientService } from '../../Services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientModel } from '../../Model/patient-model';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.scss'],
})
export class PatientUpdateComponent {
  constructor(
    private location: Location,
    private patientService: PatientService,
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  patient!: PatientModel;
  ngOnInit() {
    this.activatedRoute.params.subscribe((d) => {
      this.patientService.getById(d['id']).subscribe((data: any) => {
        this.patient = data.Data[0];
      });
    });
  }

  update() {
    if (confirm('Are you sure')) {
      this.patientService
        .updateById(this.patient._id, this.patient)
        .subscribe((data) => {
          console.log(data);
        });
      // this.router.navigateByUrl('patient/:id');
      this.goBack();
    }
  }

  goBack() {
    this.location.back();
  }
}
