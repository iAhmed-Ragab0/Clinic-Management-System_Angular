import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MedicineModel } from '../../Model/medicine-model';
import { MedicineService } from '../../Service/medicine.service';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss']
})
export class MedicineListComponent implements  OnChanges {

    medicineList:MedicineModel[] = [];

    constructor( public medicineService:MedicineService,public router:Router) {
      
    }

    ngOnInit(){ 
  
      this.medicineService.getAllMedicines().subscribe(data=>{
        this.medicineList = data ;
    
      
      })
    }

    ngOnChanges(){ 
  
      this.medicineService.getAllMedicines().subscribe(data=>{
        this.medicineList = data ;
      
      })
    }




    Delete(id:number){
      if(confirm("are u sure ? ")){
        this.medicineService.deleteMedicine(id).subscribe(data=>{
          console.log(data)
        })
        this.router.navigate(["/"])
        .then(()=>{
          this.router.navigate(["medicine"])
        })
      }
    }
}
