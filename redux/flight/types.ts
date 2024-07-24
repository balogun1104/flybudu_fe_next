// types.ts

// Request Types

export interface FilterState {
  priceRange: [number, number];
  sortOption: string;
  selectedAirlines: string[];
  isRefundable: boolean;
}

export interface FlightSearchRequest {
  // departureDate(departureDate: any): unknown;
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
  price: number;
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
  is_refundable: boolean;
  from: string;
}

export interface Flight {
  departure: FlightDetails;
  arrival: FlightDetails | null;
}

export interface AirlineFlights {
  [airlineName: string]: {
    departure: FlightDetails;
    arrival: FlightDetails | null;
  }[];
}

export interface DepartureInfo {
  id: string | number;
  airline: {
    logo: string;
    code: string;
    company: string;
  };
  departure: string;
  arrival: string;
  from: string;
  price: number;
  available_seats: number | null; // Change this to match FlightDetails
  route: {
    location: string;
    location_code: string;
    destination: string;
    destination_code: string;
  };
  date: string;
}

export interface FlightSearchResponse {
  departure: DepartureInfo[];
  arrival?: DepartureInfo[];
}

export type SearchCriteria = {
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
  tripType: "oneWay" | "roundTrip" | "multiCity";
  origin: string;
  destination: string;
  departureDate: string; // ISO date string format
  returnDate?: string; // Optional for round trips, ISO date string format
  cabinClass: "economy" | "premiumEconomy" | "business" | "firstClass";
  directFlights: boolean;
  flexibleDates: boolean;
  preferredAirlines?: string[]; // Array of airline codes
  loyaltyProgram?: string;
  currencyCode: string; // e.g., 'USD', 'EUR', 'GBP'
  maxPrice?: number; // Maximum price for the entire trip
  stops?: number; // Maximum number of stops
  departureTimeRange?: {
    start: string; // Time in 24-hour format, e.g., '06:00'
    end: string; // Time in 24-hour format, e.g., '22:00'
  };
  returnTimeRange?: {
    start: string; // Time in 24-hour format, e.g., '06:00'
    end: string; // Time in 24-hour format, e.g., '22:00'
  };
  baggageIncluded: boolean;
  specialAssistance?: string[]; // e.g., ['wheelchair', 'visuallyImpaired', 'hearingImpaired']
}
