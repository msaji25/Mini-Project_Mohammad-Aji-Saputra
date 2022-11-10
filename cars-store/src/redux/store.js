import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./features/carslice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});