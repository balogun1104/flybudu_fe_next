// redux/bookings/bookingSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingData, Booking } from "./bookingTypes.type";

interface BookingState {
  bookingData: BookingData | null;
  loading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  bookingData: null,
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingData: (state, action: PayloadAction<BookingData>) => {
      state.bookingData = action.payload;
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
    updateUserProfile: (state, action: PayloadAction<Booking>) => {
      if (state.bookingData && state.bookingData.regular.length > 0) {
        // Update the first booking in the regular array
        state.bookingData.regular[0] = {
          ...state.bookingData.regular[0],
          ...action.payload,
        };
      }
    },
  },
});

export const { setBookingData, setLoading, setError, updateUserProfile } =
  bookingSlice.actions;

export default bookingSlice.reducer;
