import { useAppSelector } from "@/redux/hooks";

export const useFlightData = () => {
  const { searchCriteria, flightData, loading, error } = useAppSelector(
    (state) => state.flight
  );

  const totalFlight = flightData.length;

  const totalPassengers = 
    searchCriteria.passengers.adults + 
    searchCriteria.passengers.children + 
    searchCriteria.passengers.infants;

  return { searchCriteria, flightData, loading, error, totalFlight, totalPassengers };
};

export const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};