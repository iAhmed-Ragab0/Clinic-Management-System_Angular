import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from './test.service';

@Component({
  selector: 'app-testlogin',
  templateUrl: './testlogin.component.html',
  styleUrls: ['./testlogin.component.scss']
})
export class TestloginComponent implements OnInit {
  constructor(private testService:TestService){}
  ngOnInit(): void {
    this.testService.getDoctor().subscribe((data:any)=>{
      console.log("doctors");
      console.log(data);
      this.testService.getEmployee().subscribe((data:any)=>{
        console.log("employees");
        console.log(data);
        this.testService.getPatient().subscribe((data:any)=>{
          console.log("Patients");
          console.log(data);
        })
      })
    })
  }
}
