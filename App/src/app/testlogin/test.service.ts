import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient, private activateParam: ActivatedRoute) { }
  baseURL: string = "http://localhost:8080";


  getDoctor():any {
    this.activateParam.params.subscribe(params => {
      return this.http.get(`${this.baseURL}/doctors/${params['id']}`);
    },err=>{
      alert(err);
      return err;
    })
  }
  getPatient():any {
    this.activateParam.params.subscribe(params => {
      return this.http.get(`${this.baseURL}/patients/${params['id']}`);
    },err=>{
      alert(err);
      return err;
    })
  }
  getEmployee():any {
    this.activateParam.params.subscribe(params => {
      return this.http.get(`${this.baseURL}/employees/${params['id']}`);
    },err=>{
      alert(err);
      return err;
    })
  }
}

