import { Address } from "./address";
export class EmployeeModel {
  constructor(
    public _id: number = 1,
    public SSN: number = 12345678912345,
    public firstName: string = '',
    public lastName: string = '',
    public age: number = 15,
    public address: Address,
    public phone: string = '01065183989',
    public job: string = '',
    public salary: number = 2000,
    public image: string = '',
    public clinic: number = 1,
    public availability: boolean = false
  ) {}
}

