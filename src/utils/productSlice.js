import { createSlice } from "@reduxjs/toolkit";
import allitems from "../utils/productsMockData";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: localStorage.getItem("productItems")
      ? JSON.parse(localStorage.getItem("productItems"))
      : [...allitems],
    showEdit: false,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("productItems", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const itemsAfterDeletion = state.items.filter(
        (e, index) => index !== action.payload
      );
      state.items = itemsAfterDeletion;
      localStorage.setItem("productItems", JSON.stringify(state.items));
    },
    editItem: (state, action) => {
      let editindex = -1;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload.editedId) {
          editindex = i;
          break;
        }
      }
      const { editedName, editedPrice, editedStock } = action.payload;
      const editeditems = [...state.items];
      editeditems[editindex].name = editedName;
      editeditems[editindex].price = editedPrice;
      editeditems[editindex].stock = editedStock;
      state.items = [...editeditems];

      localStorage.setItem("productItems", JSON.stringify(state.items));
    },
    showEdits: (state) => {
      state.showEdit = !state.showEdit;
    },
  },
});

export const { addItem, removeItem, showEdits, editItem } =
  productSlice.actions;

export default productSlice.reducer;
