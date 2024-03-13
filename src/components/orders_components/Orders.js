import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrderItem from "./OrderItem";

const Orders = () => {
  const orders = useSelector((store) => store.orders.ordersData);
  console.log(orders);
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between w-[80%] mx-auto">
        <Link to={"/"}>
          <h1 className="text-blue-400 underline cursor-pointer">Home</h1>
        </Link>
        <h1 className="font-bold text-3xl my-3 mx-auto ">Orders</h1>
        <Link to={"/products"}>
          <h1 className="text-blue-400 underline cursor-pointer">Products</h1>
        </Link>
      </div>
      <Link to={"/calenderview"}>
        <div className="text-blue-400 underline cursor-pointer text-center">
          Orders Calender View
        </div>
      </Link>
      <div className="w-[98%] md:w-[60%] flex justify-between mx-auto hover:shadow-sm  p-2 m-2 ">
        <div className="flex justify-between w-full">
          <div className="font-bold w-1/12 md:w-1/3 overflow-hidden overflow-ellipsis whitespace-nowrap text-xl">
            Id
          </div>
          <div className="font-bold w-1/3 overflow-hidden overflow-ellipsis whitespace-nowrap text-xl">
            Customer Name
          </div>
          <div className="font-bold w-1/3 overflow-hidden overflow-ellipsis whitespace-nowrap text-xl">
            Date
          </div>
        </div>
        <div className="font-bold w-1/5 overflow-hidden overflow-ellipsis whitespace-nowrap text-xl">
          Status
        </div>
        <div className="font-bold w-1/5 overflow-hidden overflow-ellipsis whitespace-nowrap text-xl">
          Edit/Delete
        </div>
      </div>

      {orders.map((order, index) => (
        <OrderItem key={index} orderitem={order} />
      ))}
    </div>
  );
};

export default Orders;
