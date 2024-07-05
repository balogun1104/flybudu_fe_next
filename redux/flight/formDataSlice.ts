// formDataSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormData, Luggage, Passenger } from "../types/formData.types";

const initialState: FormData = {
  title: "",
  surname: "",
  first_name: "",
  middle_name: "",
  email: "",
  phone: "",
  nationality: "",
  gender: "",
  DOB: "",
  passengers: [],
  luggages: {
    depart: [],
    return: [],
  },
  price: 0,
  updatedTotalPrice: 0,
  discount_code: "",
  discounted_slash: 0,
  corporate_code: "",
  corporate_slash: 0,
  amount_paid: 0,
  user_id: 0,
  schedule_id: 0,
  route_id: "",
  airline_id: "",
  status: "",
  type: "",
  departure: "",
  ticket: "",
  transaction_ref: "",
};

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      return { ...state, ...action.payload };
    },
    updateFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setLuggage: (
      state,
      action: PayloadAction<{ depart: Luggage[]; return: Luggage[] }>
    ) => {
      state.luggages = action.payload;
    },
    setPassengers: (state, action: PayloadAction<Passenger[]>) => {
      state.passengers = action.payload;
    },
    updatePassenger: (
      state,
      action: PayloadAction<{ index: number; passenger: Partial<Passenger> }>
    ) => {
      const { index, passenger } = action.payload;
      if (state.passengers[index]) {
        state.passengers[index] = { ...state.passengers[index], ...passenger };
      }
    },
    clearFormData: () => initialState,
  },
});

export const {
  setFormData,
  updateFormData,
  clearFormData,
  setLuggage,
  setPassengers,
  updatePassenger,
} = formDataSlice.actions;
export default formDataSlice.reducer;
