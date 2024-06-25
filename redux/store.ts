

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authslice';
import flightReducer from './flight/flightSlice'; 
import formDataReducer from './flight/formDataSlice'
const store = configureStore({
  reducer: {
    auth: authReducer,
    flight: flightReducer, 
    formData: formDataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;