import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../utils/orderSlice";
import OrderDetails from "./OrderDetails";

const OrderItem = ({ orderitem }) => {
  const dispatch = useDispatch();
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [edit, setEdit] = useState(true);

  const { orderId, customerName, orderDate, status, products } = orderitem;
  return (
    <div className="w-full">
      <div className="w-[98%] md:w-[60%] flex justify-between mx-auto hover:shadow-sm  p-2 m-2 cursor-pointer">
        <div
          className="flex justify-between w-full"
          onClick={() => setShowOrderDetails(!showOrderDetails)}
        >
          <div className="font-bold w-1/5">{orderId}</div>
          <div className="font-bold w-1/5 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {customerName}
          </div>
          <div className="font-bold w-1/5 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {orderDate}
          </div>
          <div className="font-bold w-1/5 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {status}
          </div>
        </div>
        <div className="md:flex v">
          <p className="underline text-blue-300 cursor-pointer px-2 hover:text-black">
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
