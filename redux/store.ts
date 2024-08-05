import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import authReducer from "./auth/authslice";
import flightReducer from "./flight/flightSlice";
import formDataReducer from "./flight/formDataSlice";
import bookingReducer from "./flight/bookingSlice";
import featuredFlightsReducer from "./flight/featuredFlightSclice";
import notificationReducer from './notification/notificationSlice';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "flight", "formData"], // Persist all reducers
};

const rootReducer = combineReducers({
  auth: authReducer,
  flight: flightReducer,
  formData: formDataReducer,
  booking: bookingReducer,
  featuredFlights: featuredFlightsReducer,
  notifications: notificationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
