import { ChangeDetectionStrategy, Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { APIService } from 'src/app/Shared/Services/api.service';
import { APIResponseVM } from 'src/app/Shared/ViewModels/apiresponse-vm';
import { GetALLClinicsService } from '../../Service/get-allclinics.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-clinic-add',
  templateUrl: './clinic-add.component.html',
  styleUrls: ['./clinic-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ClinicAddComponent implements OnInit {
  specailies!: any[];
  doctors: Observable<any[]>| undefined;
  isEmpty: boolean = true;
  targetSpecailty: number = 0;
  arr: {id: number, name: string, specialty: string}[] = [];
  IdsOfSelectedDoctors: number[] = [];
  check: Observable<any[]> | undefined;
  clinicForm!: FormGroup;

  constructor(private http: APIService, private fb: FormBuilder, private _dialog: MatDialog, private _snackBar: MatSnackBar, private dialogRef: MatDialogRef<ClinicAddComponent>, private dataService: GetALLClinicsService) {
    this.clinicForm = fb.group({
      location: fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        building: ['', Validators.required],
      }),
      mobilePhone: ['', Validators.required],
      manager: ['']
    })
  }

  ngOnInit(): void {
    this.getAllSpecailties()
  }

  getDoctorsBasedOnSpecailtyId(targetSpecailty: number) {
      let obvserver = {
        next: (data: any) => {
          this.doctors = data.Data;
          this.doctors = of(data.Data);
          data.Data.length == 0 ? this.isEmpty = true : this.isEmpty = false
        },
        complete: () => {
          console.log("completed")
        },
        error: (error: Error) => {
          console.log(error);
        }
      }
      this.http.getAllItem(`doctors?specialty=${targetSpecailty}`).subscribe(obvserver)
  }

  selectedDoctor(targetDoctor:any) {
    let temp = {id: -1, name: '', specialty: ''};
    temp.id = targetDoctor._id;
    this.IdsOfSelectedDoctors.push(targetDoctor._id);
    temp.name = targetDoctor.firstName + " " + targetDoctor.lastName;
    temp.specialty = targetDoctor.specialty.specialty;
    if(this.arr.findIndex((element) => {
      return element.id == targetDoctor._id;
    }) == -1) {
      this.arr.push(temp);
      this.check = of(this.arr);
    }
  }

  getAllSpecailties() {
    let obvserver = {
      next: (data: APIResponseVM) => {
        this.specailies = data.Data;
      },
      complete: () => {
        console.log("completed")
      },
      error: (error: Error) => {
        console.log(error);
      }
    }
    this.http.getAllItem("specialties").subscribe(obvserver)
  }

  add() {
    let obvserver = {
      next: (data: APIResponseVM) => {
        if(data.Success) {
          this.dataService.setData(data.Data);
        }
      },
      complete: () => {
        this.dialogRef.close();
        const config = new MatSnackBarConfig();
        config.duration = 2000;
        config.panelClass = ['text-center'];
        this._snackBar.open("Th clinic is add Successfully", '', config);
        console.log("completed")
      },
      error: (error: Error) => {
        console.log(error);
      }
    }
    if(this.clinicForm.status == "VALID") {
      if (this.IdsOfSelectedDoctors.length != 0) {
        this.clinicForm.value.doctors = this.IdsOfSelectedDoctors
      }
      if(this.clinicForm.value.manager == '') {
        delete this.clinicForm.value.manager;
      }
      this.http.addItem("clinics", this.clinicForm.value).subscribe(obvserver)
    }
  }

  remove(removeItem: any) {
    let targetIndex = this.IdsOfSelectedDoctors.indexOf(removeItem.id);
    if (targetIndex !== -1) {
      this.IdsOfSelectedDoctors.splice(targetIndex, 1);
    }
    targetIndex = this.arr.findIndex(obj => obj.id === removeItem.id);
    if (targetIndex !== -1) {
      this.arr.splice(targetIndex, 1);
    }
    this.check = of(this.arr)
  }
}
