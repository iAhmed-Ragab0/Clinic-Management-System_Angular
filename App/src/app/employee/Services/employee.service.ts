import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from '../Model/employee-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'http://localhost:8080/employees/';
  employeeId=localStorage.getItem('id');
  constructor(public http: HttpClient) {}

  getAllEmployees(){
    return this.http.get<EmployeeModel[]>(this.baseUrl);
  }

  addEmployee(emp: EmployeeModel) {
    return this.http.post<EmployeeModel>(this.baseUrl, emp);
  }

  getEmployeeById(id:number=0) {
    return this.http.get<EmployeeModel>(this.baseUrl + this.employeeId);
  }

  deleteEmployeeById(id: number=0) {
    return this.http.delete<EmployeeModel>(this.baseUrl + this.employeeId);
  }

  updateEmployeeById( emp: any) {
    return this.http.patch<EmployeeModel>(this.baseUrl + this.employeeId, emp);
  }
}
