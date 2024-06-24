// types/types.ts

export interface Passenger {
    name: string;
    age: number;
    gender: string;
  }
  
  export interface FormData {
    title: string;
    surname: string;
    first_name: string;
    middle_name: string;
    email: string;
    phone: string;
    nationality: string;
    gender: string;
    DOB: string;
    passengers: Passenger[];
    price: number;
    discount_code: string;
    discounted_slash: number;
    corporate_code: string;
    corporate_slash: number;
    amount_paid: number;
    user_id: number;
    schedule_id: number;
    route_id: number | string;
    airline_id: number | string;
    status: string;
    type: string;
    departure: string;
    ticket: string;
  }