// formDataSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '../types/formData.types';

const initialState: FormData = {
  title: '',
  surname: '',
  first_name: '',
  middle_name: '',
  email: '',
  phone: '',
  nationality: '',
  gender: '',
  DOB: '',
  passengers: [],
  luggages: [],
  price: 0,
  discount_code: '',
  discounted_slash: 0,
  corporate_code: '',
  corporate_slash: 0,
  amount_paid: 0,
  user_id: 0,
  schedule_id: 0,
  route_id: '',
  airline_id: '',
  status: '',
  type: '',
  departure: '',
  ticket: '',
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Partial<FormData>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFormData } = formDataSlice.actions;
export default formDataSlice.reducer;