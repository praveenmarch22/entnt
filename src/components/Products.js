import React from "react";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showEdits } from "../utils/productSlice";

const Products = () => {
  const items = useSelector((store) => store.allItems.items);
  const dispatch = useDispatch();

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
      <div className="text-center md:flex md:justify-center md:items-center mx-auto w-[40%] md:w-[100%]">
        <div
          className=" w-[80%]  border-2 cursor-pointer text-center my-2 mx-3 p-2 md:w-[10%] hover:text-white hover:bg-gray-900 text-black rounded-lg"
          onClick={() => dispatch(showEdits())}
        >
          Edit/Delete
        </div>
        <div className="w-[80%] border-2  cursor-pointer text-center my-2 mx-3 p-2 md:w-[10%] hover:text-white hover:bg-gray-900 text-black rounded-lg">
          <Link to={"/addproduct"}> Add Product</Link>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap justify-center items-center">
        {items.map((item, index) => (
          <ProductItem item={item} key={item.id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;
