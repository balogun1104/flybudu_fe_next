// utils/CalculateTotalPrice.ts

import { Luggage } from "@/redux/types/formData.types";
import { SearchCriteria } from "./types";
import { FlightSearchRequest } from "@/redux/flight/types";

interface FlightDetails {
  price: number;
  // Add other properties of FlightDetails if needed
}

export function convertFlightSearchRequestToSearchCriteria(request: FlightSearchRequest): SearchCriteria {
  return {
    passengers: request.passengers,
    tripType: request.tripType === 'Round trip' ? 'roundTrip' : 'oneWay',
    origin: request.from,
    destination: request.to,
    departureDate: request.departure_date,
    returnDate: request.arrival_date,
    cabinClass: request.classType.toLowerCase() as 'economy' | 'premiumEconomy' | 'business' | 'firstClass',
    directFlights: false, // Set a default value
    flexibleDates: false, // Set a default value
    currencyCode: 'NGN', // Set a default value
    baggageIncluded: true, // Set a default value
    // Add other properties with default values as needed
  };
}

export function calculateTotalPrice(
  selectedFlight: {
    departure: FlightDetails | null;
    arrival: FlightDetails | null;
  },
  searchCriteria: SearchCriteria,
  luggages: { depart: Luggage[]; return: Luggage[] },
  discountValue: number
) {
  // Calculate luggage prices
  const luggagePrices = {
    depart: luggages.depart.reduce(
      (total, luggage) => total + luggage.price * luggage.quantity,
      0
    ),
    return: luggages.return.reduce(
      (total, luggage) => total + luggage.price * luggage.quantity,
      0
    ),
  };

  const totalLuggagePrice = luggagePrices.depart + luggagePrices.return;

  // Calculate flight prices
  const arrivalPrice = selectedFlight.arrival?.price
    ? Number(selectedFlight.arrival.price)
    : 0;
  const departurePrice = selectedFlight.departure?.price
    ? Number(selectedFlight.departure.price)
    : 0;

  const flightPrice = arrivalPrice + departurePrice;

  // Calculate total passengers
  const totalPassengers =
    searchCriteria.passengers.adults +
    searchCriteria.passengers.children +
    searchCriteria.passengers.infants;

  // Calculate final price
  const baseFare = flightPrice * totalPassengers;
  const updatedTotalPrice = baseFare + totalLuggagePrice - discountValue;

  return {
    baseFare,
    totalLuggagePrice,
    updatedTotalPrice,
    discountValue,
    luggagePrices,
    flightPrice,
    totalPassengers
  };
}

export function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function calculateLuggageBreakdown(luggages: Luggage[]) {
  return luggages.map(luggage => ({
    weight: luggage.weight,
    quantity: luggage.quantity,
    price: luggage.price * luggage.quantity
  }));
}