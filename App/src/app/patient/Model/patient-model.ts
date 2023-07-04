
export interface PatientModel {
  _id: number;
  SSN: number;
  firstName: string;
  lastName: string;
  age: number;
  address: {
    city: string;
    street: string;
    building: number;
  };
  phone: string;
  image: string;
  availability: boolean;
}
