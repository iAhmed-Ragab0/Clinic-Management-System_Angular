export interface Appointment {
  _id: number;
  clinic: {
    _id: number;
    location: {
      city: string;
      street: string;
      building: number;
    };
    mobilePhone: string;
  };
  doctor: {
    _id: number;
    firstName: string;
    lastName: string;
    specialty: {
      specialty: string;
    };
  };
  patient: {
    _id: number;
    firstName: string;
    lastName: string;
    age: number;
  };
  booked: boolean;
  date: string;
  timeFrom: string;
  timeTo: string;
}
