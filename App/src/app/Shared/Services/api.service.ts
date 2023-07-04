import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponseVM } from '../ViewModels/apiresponse-vm';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class APIService {
  httpOption;
  constructor(private http: HttpClient , private route: Router ) {
    this.httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
  }

  private handleError(err: HttpErrorResponse) {
    if(err.status === 0) {
      console.log(err.error);
    }
    else {
      console.log(err.error);
    }
    return throwError(function() {
      return new Error("Error occur, please try again!");
    })
  }

  getAllItem(APIRoute: string): Observable<APIResponseVM> {
    return this.http.get<APIResponseVM>(`${environment.APIURL}/${APIRoute}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  addItem(APIRoute: string, object: any):Observable<APIResponseVM> {
    return this.http.post<APIResponseVM>(`${environment.APIURL}/${APIRoute}`, object)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  updateItem(APIRoute: string, object: any):Observable<APIResponseVM> {
    return this.http.patch<APIResponseVM>(`${environment.APIURL}/${APIRoute}`, object)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  deleteItem(APIRoute: string):Observable<APIResponseVM> {
    return this.http.delete<APIResponseVM>(`${environment.APIURL}/${APIRoute}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  getById(APIRoute: string): Observable<APIResponseVM> {
    console.log(`${environment.APIURL}${APIRoute}`);
    return this.http.get<APIResponseVM>(`${environment.APIURL}${APIRoute}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
}

//Write and send error into an API the sort all errors to allow backend-developers to solve this errors

//Alert in angular = https://material.angular.io/components/snack-bar/overview
