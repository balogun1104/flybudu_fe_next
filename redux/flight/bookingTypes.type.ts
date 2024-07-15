// types/bookingTypes.ts

export interface Passenger {
    name: string;
    age: number;
    gender: string;
  }
  
  export interface User {
    id: number;
    name: string;
    last_name: string | null;
    other_name: string | null;
    email: string;
    email_verified_at: string;
    type: string;
    phone: string | null;
    created_at: string;
    updated_at: string;
  }
  
  export interface Airline {
    id: number;
    company: string;
    code: string;
    logo: string;
    region: string;
    active: string;
    created_at: string;
    updated_at: string;
    luggage10: string;
    luggage15: string;
    luggage20: string;
  }
  
  export interface Route {
    id: number;
    location: string;
    location_code: string;
    destination: string;
    destination_code: string;
    active: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface Featured {
    id: number;
    route_id: string;
    airline_id: string;
    departure: string;
    price: string;
    available_seats: string;
    image: string;
    additional_info: string | null;
    status: string | null;
    active: string;
    created_at: string;
    updated_at: string;
    airline: Airline;
    route: Route;
  }
  
  export interface Schedule {
    id: number;
    route_id: string;
    airline_id: string;
    departure: string;
    arrival: string;
    date: string;
    price: string;
    setting_id: string;
    peak_periods: string;
    days: string;
    repeats: string;
    dates: string;
    exempted_dates: string;
    available_seats: string | null;
    additional_info: string | null;
    status: string;
    active: string;
    created_at: string;
    updated_at: string;
    airline: Airline;
    route: Route;
  }
  
  export interface Booking {
    id: number;
    title: string;
    surname: string;
    first_name: string;
    middle_name: string;
    email: string;
    phone: string;
    nationality: string;
    gender: string;
    DOB: string;
    passengers: string;
    luggages: string | null;
    price: string;
    discount_code: string;
    discounted_slash: string;
    corporate_code: string;
    corporate_slash: string;
    amount_paid: string;
    user_id: string;
    status: string;
    active: string;
    ticket: string;
    ticket_document: string | null;
    featured_id?: string;
    schedule_id?: string;
    route_id?: string;
    airline_id?: string;
    type?: string;
    departure: string;
    transaction_ref: string;
    created_at: string;
    updated_at: string;
    user: User;
    featured?: Featured;
    schedule?: Schedule;
    route?: Route;
    airline?: Airline | null;
  }
  
  export interface BookingData {
    totalBooking: number;
    featureds: Booking[];
    regular: Booking[];
    cancelledBooking: number;
    pendingBooking: number;
  }
  
  export interface BookingResponse {
    status: boolean;
    message: string;
    data: BookingData;
    token: string | null;
  }