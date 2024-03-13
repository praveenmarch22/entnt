import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteOrder, updateOrderStatus } from "../utils/orderSlice";
import OrderDetails from "./OrderDetails";

const OrderItem = ({ orderitem }) => {
  const dispatch = useDispatch();
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [edit, setEdit] = useState(true);

  const handleInputChange = (e) => {
    const updatedstatus = e.target.value;
    dispatch(updateOrderStatus({ ...orderitem, status: updatedstatus }));
    setEdit(!edit);
  };

  const { orderId, customerName, orderDate, status, products } = orderitem;
  return (
    <div className="w-full">
      <div className="w-[98%] md:w-[60%] flex justify-between mx-auto hover:shadow-sm  p-2 m-2 cursor-pointer">
        <div
          className="flex justify-between w-full"
          onClick={() => setShowOrderDetails(!showOrderDetails)}
        >
          <div className="font-bold w-1/12 md:w-1/3">{orderId}</div>
          <div className="font-bold w-1/3 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {customerName}
          </div>
          <div className="font-bold w-1/3 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {orderDate}
          </div>
        </div>
        {edit === true ? (
          <div className="font-bold w-1/5 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {status}
          </div>
        ) : (
          <select
            value={status}
            onChange={handleInputChange}
            className="border-b-2  block w-1/5 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        )}

        <div className="md:flex w-1/5">
          <p
            className="underline text-blue-300 cursor-pointer px-2 hover:text-black"
            onClick={() => setEdit(!edit)}
          >
            Edit
          </p>

          <p
            className="underline text-blue-300 cursor-pointer hover:text-black"
            onClick={() => {
              dispatch(deleteOrder(orderitem));
            }}
          >
            Delete
          </p>
        </div>
      </div>
      {showOrderDetails && <OrderDetails orderdetails={products} />}
    </div>
  );
};

export default OrderItem;
