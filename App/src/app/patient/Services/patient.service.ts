import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientModel } from '../Model/patient-model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(public http: HttpClient) {}
  baseurl = 'http://localhost:8080/patients/';

  //Function To get All Patients
  getAll() {
    return this.http.get<PatientModel[]>(this.baseurl);
  }

  //Function To get Patient by his id
  getById(id: number) {
    return this.http.get<PatientModel>(this.baseurl + id);
  }

  //Function To add new Patients
  addPatient(patient: PatientModel) {
    return this.http.post<PatientModel>(this.baseurl, patient);
  }

  //Function To update Patient data by his id
  updateById(id: number, patient: PatientModel) {
    return this.http.patch<PatientModel>(this.baseurl + id, patient);
  }

  //Function To delete Patient data by his id
  deleteById(id: number) {
    return this.http.delete<PatientModel>(this.baseurl + id);
  }
}
