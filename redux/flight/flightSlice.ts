import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FlightSearchRequest, FlightSearchResponse, Flight } from "./types";

interface FlightState {
  searchCriteria: FlightSearchRequest;
  flightData: FlightSearchResponse;
  loading: boolean;
  error: string | null;
  selectedFlight: Flight | null;
  initialFlightData: FlightSearchResponse | null;
  discountValue: number;
  filter: {
    priceRange: [number, number];
    sortOption: string;
    selectedAirlines: string[];
    isRefundable: boolean;
  };
  lastSearchedFlightData: FlightSearchResponse | null;
}

const initialState: FlightState = {
  searchCriteria: {
    from: "",
    to: "",
    departure_date: "",
    arrival_date: "",
    passengers: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    flightType: "Local Flights",
    tripType: "Round trip",
    classType: "Economy",
  },
  flightData: [],
  initialFlightData: null,
  loading: false,
  discountValue: 0,
  error: null,
  selectedFlight: null,
  filter: {
    priceRange: [0, 200000],
    sortOption: "recommended",
    selectedAirlines: [],
    isRefundable: false,
  },
  lastSearchedFlightData: null,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setSearchCriteria: (state, action: PayloadAction<FlightSearchRequest>) => {
      state.searchCriteria = action.payload;
    },
    setFlightData: (state, action: PayloadAction<FlightSearchResponse>) => {
      state.flightData = action.payload;
      state.initialFlightData = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setInitialFlightData: (
      state,
      action: PayloadAction<FlightSearchResponse>
    ) => {
      state.initialFlightData = action.payload;
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
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.filter.priceRange = action.payload;
    },
    setSortOption: (state, action: PayloadAction<string>) => {
      state.filter.sortOption = action.payload;
    },
    setSelectedAirlines: (state, action: PayloadAction<string[]>) => {
      state.filter.selectedAirlines = action.payload;
    },
    setIsRefundable: (state, action: PayloadAction<boolean>) => {
      state.filter.isRefundable = action.payload;
    },
    resetFilter: (state) => {
      state.filter = initialState.filter;
    },
    setLastSearchedFlightData: (
      state,
      action: PayloadAction<FlightSearchResponse>
    ) => {
      state.lastSearchedFlightData = action.payload;
    },
    clearLastSearchedFlightData: (state) => {
      state.lastSearchedFlightData = null;
    },
    clearInitialState: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setSearchCriteria,
  setFlightData,
  setLoading,
  setError,
  setSelectedFlight,
  setDiscountValue,
  setPriceRange,
  setSortOption,
  setSelectedAirlines,
  setIsRefundable,
  setInitialFlightData,
  resetFilter,
  setLastSearchedFlightData,
  clearLastSearchedFlightData,
  clearInitialState,
} = flightSlice.actions;

export default flightSlice.reducer;
