import { DoctorService } from './../../services/doctor.service';
import { Component, ViewChild } from '@angular/core';
import { Doctor } from '../../Model/doctor';
import { FormBuilder,Validators} from '@angular/forms';
import { Appointment } from '../../Model/appointment';
import { APIService } from 'src/app/Shared/Services/api.service';

@Component({
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrls: ['./doctor-update.component.scss']
})
export class DoctorUpdateComponent {
  doctor :any;
  flag=true;
  flag2=true;
  appointments:any;
  appointment:Appointment=new Appointment();
  pageSize = 3;
  page = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private doctorService:DoctorService ,private apiService: APIService, private fb:FormBuilder) { }
  // dataSource = new MatTableDataSource<Appointment>([]);
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  id = localStorage.getItem("id");
    ngOnInit(): void {
      this.doctorService.getDoctorById().subscribe((data:any)=>{
        this.doctor=data.Data[0];
        console.log(this.doctor);
      })
        this.apiService.getAllItem(`appointment/doctor/${this.id}?`).subscribe(res => {
          console.log(res);
          this.appointments = res;
      })
    }
    get firstName(){
      return this.doctorUpdateForm.get('firstName');
    }
    get lastName(){
      return this.doctorUpdateForm.get('lastName');
    }
    get email(){
      return this.doctorUpdateForm.get('email');
    }
    get phone(){
      return this.doctorUpdateForm.get('phone');
    }
    doctorUpdateForm = this.fb.group({ 
      firstName: ['', [ Validators.required]],
      lastName: ['', [Validators.required]],
      email: [''],
      phone: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        building: [''],
      })
    });
    // updateDoctor(){
    //   console.log(this.doctorUpdateForm.value);
    //   this.doctorService.updateDoctorById(this.doctorUpdateForm?.value).subscribe((data:any)=>{
    //     console.log(data);
    //   })
    // }
    switch(){
      this.flag=!this.flag;
      this.flag2=true;
      this.LoadApiData();
    }
    switchFlag2(){
     this.flag2=!this.flag2;
     this.flag=true;
    }
    LoadApiData(){
        this.doctorUpdateForm.patchValue({
          firstName: this.doctor.firstName,
          lastName: this.doctor.lastName,
          //get email from local storage
          // email: localStorage.getItem('email'),
          phone: this.doctor.phone,
          address: {
            city: this.doctor.address.city,
            street: this.doctor.address.street,
            building: this.doctor.address.building,
          }
        })
    }
    onSubmit(){
      console.log(this.doctorUpdateForm.value);
      this.doctorService.updateDoctorById(this.doctorUpdateForm?.value)
      .subscribe((data:any)=>{
        console.log("Updated",data);
        this.doctorService.getDoctorById().subscribe((data:any)=>{
          this.doctor=data.Data[0];
          console.log(this.doctor);
        })
      } )
    }
    // closeEdit(){
    //   this.flag=!this.flag;
    // }
    // closeAppointment(){ 
    //   this.flag2=!this.flag2;
    // }
  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
  
}