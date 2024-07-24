import { useAppSelector } from "@/redux/hooks";
import { FlightSearchResponse } from "@/redux/flight/types"; // Make sure to import this type

export const useFlightData = () => {
  const { searchCriteria, flightData, loading, error, selectedFlight } =
    useAppSelector((state) => state.flight);

  const totalFlight = calculateTotalFlights(flightData);

  const totalPassengers =
    searchCriteria.passengers.adults +
    searchCriteria.passengers.children +
    searchCriteria.passengers.infants;

  return {
    searchCriteria,
    flightData,
    loading,
    error,
    totalFlight,
    totalPassengers,
    selectedFlight,
  };
};

// Helper function to calculate total flights
const calculateTotalFlights = (flightData: FlightSearchResponse): number => {
  return (
    (flightData.departure?.length || 0) + (flightData.arrival?.length || 0)
  );
};

export const formatDate = (dateInput: string | Date) => {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
