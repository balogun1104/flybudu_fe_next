// types.ts

// Request Types
export interface FlightSearchRequest {
  departureDate(departureDate: any): unknown;
  from: string;
  to: string;
  departure_date: string;
  arrival_date?: string;
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
  flightType: string; // 'Local Flights' or 'International Flights'
  tripType: string; // 'Round trip' or 'One Way'
  classType: string; // 'Economy', 'Business', or 'First Class'
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
  created_at: string | null;
  updated_at: string | null;
}

export interface FlightDetails {
  departure_time: string;
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
  route: Route;
}

export interface Flight {
  departure: FlightDetails;
  arrival: FlightDetails | null;
}

export interface AirlineFlights {
  [airlineName: string]: Flight[];
}

export type FlightSearchResponse = AirlineFlights[];