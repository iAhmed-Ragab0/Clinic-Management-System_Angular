import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  baseURL:string = "http://localhost:8080";

  
  register(patientData:any){
    return this.http.post(`${this.baseURL}/patients`,patientData);
  }

}
