// store/flightSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FlightSearchRequest, FlightSearchResponse } from './types';

interface FlightState {
  searchCriteria: FlightSearchRequest;
  flightData: FlightSearchResponse;
  loading: boolean;
  error: string | null;
}

const initialState: FlightState = {
  searchCriteria: {
    from: '',
    to: '',
    departure_date: '',
    arrival_date: '',
    passengers: 0,
  },
  flightData: [],
  loading: false,
  error: null,
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
  },
});

export const { setSearchCriteria, setFlightData, setLoading, setError } = flightSlice.actions;
export default flightSlice.reducer;