export interface IClinic {
  _id: number,
  __v: number,
  location: {
    city: string,
    street: string,
    building: number,
    [key: string]: any;
  }
  mobilePhone: string,
  doctors: [
    {
      firstName: string,
      lastName: string,
      specialty: {
        specialty: string
      }
    }
  ],
  availability: boolean
}
