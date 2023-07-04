import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  baseURL:string = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }
  authentication(formData:any){
    return this.http.post(`${this.baseURL}login`,formData)
  }

  findId(email:any){
    return this.http.get(`${this.baseURL}users?email=${email}`)
  }

  findName(id:number, role:string){
    return this.http.get(`${this.baseURL}${role}s/${id}`)
  }

  loggedIn(){
    return !!localStorage.getItem('role');
  }

  getRole(){
    return localStorage.getItem('role')?.toString();
  }

  
  getAllDoctors(){
    return this.http.get(`${this.baseURL}/doctors`)
  }

  getToken(){
    return localStorage.getItem('TOKEN');
  }
  // getEmail(){
  //   return localStorage.getItem('email');
  // }

}
