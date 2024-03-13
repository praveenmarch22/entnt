import { createSlice } from "@reduxjs/toolkit";
import mockOrders from "./ordersMockData";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    ordersData: [...mockOrders],
  },
  reducers: {
    updateOrderStatus: (state, action) => {},
    deleteOrder: (state, action) => {
      const updatedOrders = state.ordersData.filter(
        (order) => order.orderId !== action.payload.orderId
      );
      state.ordersData = updatedOrders;
    },
  },
});

export const { updateOrderStatus, deleteOrder } = orderSlice.actions;

export default orderSlice.reducer;
