import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const items = useSelector((store) => store.allItems.items);

  return (
    <div className="w-full mt-8">
      <div className="flex items-center justify-between w-[80%] mx-auto">
        <Link to={"/"}>
          <h1 className="text-blue-400 underline cursor-pointer">Home</h1>
        </Link>
        <h1 className="font-bold text-3xl my-3 mx-auto ">Products</h1>
        <Link to={"/orders"}>
          <h1 className="text-blue-400 underline cursor-pointer">Orders</h1>
        </Link>
      </div>
      <div className="mt-2 flex flex-wrap justify-center items-center">
        {items.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
