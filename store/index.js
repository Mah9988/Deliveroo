import { configureStore } from "@reduxjs/toolkit";
import basket from "./reducers/basketSlice";
import restaurant from "./reducers/restaurantSlice";

export const store = configureStore({
  reducer: { basket, restaurant },
});
