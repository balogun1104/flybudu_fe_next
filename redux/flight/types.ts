// types/flight.ts

// Request Types
export interface FlightSearchRequest {
    from: string;
    to: string;
    departure_date: string;
    arrival_date?: string; // Optional for one-way trips
    passengers: number;
  }
  
  // Response Types
  export interface Airline {
    id: number;
    company: string;
    code: string;
    logo: string;
    region: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface FlightDetails {
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
    available_seats: number | null;
    additional_info: string | null;
    status: string;
    created_at: string;
    updated_at: string;
    airline: Airline;
  }
  
  export interface Flight {
    departure: FlightDetails;
    arrival: FlightDetails | null;
  }
  
  export interface AirlineFlights {
    [airlineName: string]: Flight[];
  }
  
  export type FlightSearchResponse = AirlineFlights[];