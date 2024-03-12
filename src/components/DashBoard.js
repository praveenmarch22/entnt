import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const items = useSelector((store) => store.allItems.items);
  return (
    <div className="w-full mt-8">
      <div className="flex items-center justify-between w-[80%] mx-auto">
        <Link to={"/products"}>
          <h1 className="text-blue-400 underline cursor-pointer">Products</h1>
        </Link>
        <h1 className="font-bold text-3xl my-3 mx-auto ">DashBoard</h1>
        <Link to={"/orders"}>
          <h1 className="text-blue-400 underline cursor-pointer">Orders</h1>
        </Link>
      </div>
      <div>
        <div>
          <div>Total number of products : {items.length}</div>
          <div>Total number of orders : {items.length}</div>
        </div>
        <div>Categories:</div>
      </div>
    </div>
  );
};

export default DashBoard;
