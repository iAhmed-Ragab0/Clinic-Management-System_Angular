export class Doctor {
    constructor(
       public _id:number=1, 
       public SSN:number=12345678912345,
       public firstName:string="Sohaila",
       public lastName:string="Elhakim",
       public age:number=25,
       public address: string="",
       public email: string = 'doctor@gmail.com',
       public phone: string = '012345678910',
       public specialty:number = 1,
       public image:string="",
       public clinic:number=1,
       public availability:boolean=true)
       {}
}
