import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FlightSearchRequest, FlightSearchResponse, Flight } from './types';

interface FlightState {
  searchCriteria: FlightSearchRequest;
  flightData: FlightSearchResponse;
  loading: boolean;
  error: string | null;
  selectedFlight: Flight | null;
  discountValue: number;
}

const initialState: FlightState = {
  searchCriteria: {
    from: '',
    to: '',
    departure_date: '',
    arrival_date: '',
    
    passengers: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    flightType: 'Local Flights',
    tripType: 'Round trip',
    classType: 'Economy',
  },
  flightData: [],
  loading: false,
  discountValue: 0,
  error: null,
  selectedFlight: null,
};

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    setSearchCriteria: (state, action: PayloadAction<FlightSearchRequest>) => {
      state.searchCriteria = action.payload;
    },
    setFlightData: (state, action: PayloadAction<FlightSearchResponse>) => {
      state.flightData = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSelectedFlight: (state, action: PayloadAction<Flight | null>) => {
      state.selectedFlight = action.payload;
    },
    setDiscountValue: (state, action: PayloadAction<number>) => {
      state.discountValue = action.payload;
    },
  },
});

export const { setSearchCriteria, setFlightData, setLoading, setError, setSelectedFlight, setDiscountValue } = flightSlice.actions;
export default flightSlice.reducer;