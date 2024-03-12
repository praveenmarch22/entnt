import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import orderSlice from "./orderSlice";

const appStore = configureStore({
  reducer: {
    allItems: productSlice,
    orders: orderSlice,
  },
});

export default appStore;
