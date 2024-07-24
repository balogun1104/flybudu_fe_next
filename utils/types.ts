// types.ts

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
  
  export interface SelectedAirline {
    arrival?: {
      price: number;
    };
    departure?: {
      price: number;
    };
    // Add other properties as needed
  }
  
  export interface Luggage {
    weight: number;
    quantity: number;
    price: number;
  }