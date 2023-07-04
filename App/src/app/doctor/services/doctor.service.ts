import { APIService } from 'src/app/Shared/Services/api.service';
import { Doctor } from '../Model/doctor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
 httpOptions;
 baseUrl= `${environment.APIURL}/doctors`;
 doctorId=localStorage.getItem('id');
 constructor(private httpClient: HttpClient, private http:APIService) { 
   this.httpOptions = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         // 'Authorization': 'my-auth-token'
         })
   }
 }
 private handleError(error: HttpErrorResponse) {
   if(error.status === 0) {
     console.log("an error occured",error.error);
   }
   else {
     console.log(`Backend returned code ${error.status}, Body was:`,error.error);
   }
      // Return an observable with a user-facing error message.
   return throwError(function() {
     return new Error("Something bad happened; please try again later",error.error);
   })
 }
 getAllDoctors() : Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(this.baseUrl)
      .pipe(
         retry(2),
         catchError(this.handleError)
      )
 }
 addDoctor(doctor:Doctor) : Observable<Doctor> {
  return this.httpClient.post<Doctor>(this.baseUrl,doctor)
      .pipe(
         retry(2),
         catchError(this.handleError)
            );
}
 getDoctorById() : Observable<Doctor> {
    return this.httpClient.get<Doctor>(this.baseUrl+"/"+this.doctorId)
      .pipe(
         retry(2),
         catchError(this.handleError)
      )
 }
 updateDoctorById(doctor:any){
    return this.httpClient.patch<Doctor>(this.baseUrl+"/"+this.doctorId,doctor)
      .pipe(
         retry(2),
        catchError(this.handleError)
      )

 }
 deleteDoctorById(id:number){
    return this.httpClient.delete<Doctor>(this.baseUrl+"/"+this.doctorId)
     .pipe(
         retry(2),
         catchError(this.handleError)
     )
 }
 updateDoctorByImage(id:number,doctor:Doctor) {
    return this.httpClient.patch<Doctor>(this.baseUrl+"/image/"+this.doctorId,doctor)
      .pipe(
         retry(2),
         catchError(this.handleError)
      )
 }
 updateDoctorByManager(id:number,doctor:Doctor){
    return this.httpClient.patch<Doctor>(this.baseUrl+"/manager/"+this.doctorId,doctor)
      .pipe(
         retry(2),
         catchError(this.handleError)
      )
 }
}
