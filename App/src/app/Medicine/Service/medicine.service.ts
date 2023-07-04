import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicineModel } from '../Model/medicine-model';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(public http:HttpClient) { }
  
  baseUrl="http://localhost:8080/medicine/";

  getAllMedicines(){
    return this.http.get<MedicineModel[]>(this.baseUrl)
  }

  // getById(id:number){
  //   return this.http.get<MedicineModel>(this.baseUrl+id)
  // }

  addMedicine(newMedicine:MedicineModel){
    return this.http.post(this.baseUrl,newMedicine)
  }
  deleteMedicine(id:number){
    return this.http.delete(this.baseUrl+id)
  }

}
