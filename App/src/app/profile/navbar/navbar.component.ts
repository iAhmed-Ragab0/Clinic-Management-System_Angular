import { Route, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Address } from 'src/app/employee/Model/address';
import { EmployeeModel } from 'src/app/employee/Model/employee-model';
import { EmployeeService } from 'src/app/employee/Services/employee.service';
import {Location} from '@angular/common';
import { APIService } from 'src/app/Shared/Services/api.service';


@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user:any;
  flag=true;
  id=localStorage.getItem("id");
  url='/'+this.route.url.split('/')[1]+'s/'+this.id
  constructor(public aPIService: APIService ,private _location: Location ,private route:Router) {}

  ngOnInit() {
    this.aPIService.getById(`${this.url}`).subscribe((data:any) => {
      this.user = data.Data[0];
      console.warn(data.Data[0]);
    });
    console.log(this.route.url.split('/')[1]+'s/'+this.id);
  }
  logout()
  {
    localStorage.clear();
    this._location.back();
  }
}
