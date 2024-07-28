// featuredFlightsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Interface definitions
interface Airline {
  id: number;
  company: string;
  code: string;
  logo: string;
  region: string;
  active: string;
  created_at: string;
  updated_at: string;
  luggage10: string;
  luggage15: string;
  luggage20: string;
}

interface Route {
  id: number;
  location: string;
  location_code: string;
  destination: string;
  destination_code: string;
  active: string;
  created_at: string;
  updated_at: string;
}

interface FeaturedFlight {
  id: number;
  route_id: string;
  airline_id: string;
  departure: string;
  price: string;
  available_seats: string;
  image: string;
  additional_info: string | null;
  status: string | null;
  active: string;
  created_at: string;
  updated_at: string;
  airline: Airline;
  route: Route;
}

interface FeaturedFlightsState {
  flights: FeaturedFlight[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: FeaturedFlightsState = {
  flights: [],
  status: "idle",
  error: null,
};

export const fetchFeaturedFlights = createAsyncThunk<
  FeaturedFlight[],
  void,
  { rejectValue: string }
>("featuredFlights/fetchFeaturedFlights", async (_, { rejectWithValue }) => {
  try {
    // The actual API call is now handled in the Navbar component
    // This thunk is now just a wrapper for consistency
    return [];
  } catch (error) {
    return rejectWithValue((error as Error).message || "An error occurred");
  }
});

const featuredFlightsSlice = createSlice({
  name: "featuredFlights",
  initialState,
  reducers: {
    setFeaturedFlights: (state, action: PayloadAction<FeaturedFlight[]>) => {
      state.flights = action.payload;
      state.status = "succeeded";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedFlights.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchFeaturedFlights.fulfilled,
        (state, action: PayloadAction<FeaturedFlight[]>) => {
          state.status = "succeeded";
          state.flights = action.payload;
        }
      )
      .addCase(fetchFeaturedFlights.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An error occurred";
      });
  },
});

export const { setFeaturedFlights } = featuredFlightsSlice.actions;

export default featuredFlightsSlice.reducer;
