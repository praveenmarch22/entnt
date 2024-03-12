import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

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
    </div>
  );
};

export default Orders;
