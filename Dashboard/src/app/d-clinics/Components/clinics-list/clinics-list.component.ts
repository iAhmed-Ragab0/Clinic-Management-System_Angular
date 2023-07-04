import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { APIService } from 'src/app/Shared/Services/api.service';
import { APIResponseVM } from 'src/app/Shared/ViewModels/apiresponse-vm';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';
import { IClinic } from '../../Models/iclinic';
import { ClinicAddComponent } from '../clinic-add/clinic-add.component';
import { ClinicUpdateComponent } from '../clinic-update/clinic-update.component';
import { ClinicDetailsComponent } from '../clinic-details/clinic-details.component';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { GetALLClinicsService } from '../../Service/get-allclinics.service';

@Component({
  selector: 'app-clinics-list',
  templateUrl: './clinics-list.component.html',
  styleUrls: ['./clinics-list.component.scss']
})

export class ClinicsListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['city', 'street', 'building', 'mobilePhone', 'doctors', 'details', 'update', 'availability'];
  dataSource = new MatTableDataSource<IClinic>()
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  clinicData: IClinic[];
  dataFromDialog: any;

  constructor(private http: APIService, private _dialog: MatDialog, private dataService: GetALLClinicsService) {
    this.clinicData = [];
    this.getAllClinics()

  }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.dataFromDialog = data;
      for (let i = 0; i < data.length; i++) {
        data[i].city = data[i].location.city;
        data[i].building = data[i].location.building;
        data[i].street = data[i].location.street;
      }
      this.clinicData.push(data[0])
      this.dataSource = new MatTableDataSource<IClinic>(this.clinicData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  openAddClinicForm() {
    this._dialog.open(ClinicAddComponent);
  }

  openDetialsClinic(target: IClinic) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = target;
    this._dialog.open(ClinicDetailsComponent, dialogConfig);
  }

  openUpdateClinicForm(target: IClinic) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = target;
    this._dialog.open(ClinicUpdateComponent, dialogConfig)
  }

  getAllClinics() {
    let obvserver = {
      next: (data: any) => {
        for (let i = 0; i < data.Data.length; i++) {
          data.Data[i].city = data.Data[i].location.city;
          data.Data[i].building = data.Data[i].location.building;
          data.Data[i].street = data.Data[i].location.street;
        }
        this.clinicData = data.Data;
        this.dataSource = new MatTableDataSource<IClinic>(this.clinicData);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      complete: () => {
        console.log("completed")
      },
      error: (error: Error) => {
        console.log(error);
      }
    }

    this.http.getAllItem("clinics").subscribe(obvserver);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
