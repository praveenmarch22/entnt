import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const appStore = configureStore({
  reducer: {
    allItems: productSlice,
  },
});

export default appStore;
