import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//creation of store for the application
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
