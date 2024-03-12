import { createSlice } from "@reduxjs/toolkit";
import allitems from "../components/AllData";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [...allitems],
    showEdit: false,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemsAfterDeletion = state.items.filter(
        (e, index) => index != action.payload
      );
      state.items = itemsAfterDeletion;
    },
    editItem: (state, action) => {
      let editindex = -1;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id == action.payload.editedId) {
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
    },
    showEdits: (state) => {
      state.showEdit = !state.showEdit;
    },
  },
});

export const { addItem, removeItem, showEdits, editItem } =
  productSlice.actions;

export default productSlice.reducer;
