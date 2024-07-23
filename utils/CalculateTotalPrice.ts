// utils/calculateTotalPrice.ts

import { SearchCriteria, SelectedAirline, Luggage } from "@/types";

export function calculateTotalPrice(
  selectedAirline: SelectedAirline,
  searchCriteria: SearchCriteria,
  luggages: { depart: Luggage[], return: Luggage[] },
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
  const arrivalPrice = selectedAirline?.arrival?.price
    ? Number(selectedAirline.arrival.price)
    : 0;
  const departurePrice = selectedAirline?.departure?.price
    ? Number(selectedAirline.departure.price)
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

// You might want to add some utility functions here as well

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