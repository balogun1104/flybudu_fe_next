

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authslice';
import flightReducer from './flight/flightSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    flight: flightReducer, 
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;