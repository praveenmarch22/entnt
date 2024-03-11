import { createSlice } from "@reduxjs/toolkit";
import items from "../components/AllData";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [...items],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemsAfterDeletion = state.items.filter(
        (e) => e.id != action.payload.id
      );
      return itemsAfterDeletion;
    },
  },
});

export const { addItem, removeItem } = productSlice.actions;

export default productSlice.reducer;
