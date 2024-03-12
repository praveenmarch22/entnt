import { createSlice } from "@reduxjs/toolkit";
import mockOrders from "./ordersMockData";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    ordersData: [...mockOrders],
  },
  reducers: {
    updateOrderStatus: (state, action) => {},
    deleteOrder: (state, action) => {},
  },
});

export const { updateOrderStatus, deleteOrder } = orderSlice.actions;

export default orderSlice.reducer;
