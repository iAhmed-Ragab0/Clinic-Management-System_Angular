import { Component } from '@angular/core';
import { Address } from '../../Model/address';
import { EmployeeModel } from '../../Model/employee-model';
import { EmployeeService } from '../../Services/employee.service';
import { FormGroup ,FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent {

  employee:EmployeeModel =new EmployeeModel(0,0,"","",0,{} as Address,"","",0,"",0,false);
  flag=true;
  constructor(public employeeService: EmployeeService,public fb: FormBuilder) {}

  profileForm = this.fb.group({ 
    firstName: [''],
    lastName: [''],
    phone: [''],
    profile: [''],
    address: this.fb.group({
      city: [''],
      street: [''],
      building: [''],
    }),
  })
  ngOnInit() {
    this.employeeService.getEmployeeById().subscribe((data:any) => {
      this.employee = data.Data[0];
    });
  }

  onFileChange(event?:any)
  {
    var reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    console.log(event.target.files[0].name);

    this.profileForm.patchValue({
      profile: event.target.files[0].name,
      })
  }
  update()
  {
    this.employeeService.updateEmployeeById(this.profileForm?.value).subscribe((data:any) => {
      this.employeeService.getEmployeeById().subscribe((data:any) => {
        this.employee = data.Data[0];
        console.log(this.profileForm.value)
      });
    });
    
  }


  patchform()
  {

    this.profileForm.patchValue({
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      phone: this.employee.phone,
      address: {
        city: this.employee.address.city,
        street: this.employee.address.street,
        building:this.employee.address.building+'',
      }
      })
  }

  switch()
  {
    this.patchform();
    this.flag=!this.flag;
  }
}
