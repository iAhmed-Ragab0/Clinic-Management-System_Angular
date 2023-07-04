import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineModel } from '../../Model/medicine-model';
import { MedicineService } from '../../Service/medicine.service';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.scss']
})
export class MedicineAddComponent {

  newMedicine : MedicineModel  = new MedicineModel (0,"","");
  
  
constructor(public medicineService:MedicineService , public router :Router) {
  
}

save()
{

  this.medicineService.addMedicine(this.newMedicine).subscribe(data=>{
    console.log(data);
  })
  this.router.navigateByUrl("/medicine")
}

}
