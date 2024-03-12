import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const [showCategories, setShowCategories] = useState(true);
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
      <div className="w-[100%] md:w-[85%] mt-10 mx-auto">
        <div className="md:flex">
          <div className=" mx-auto w-[90%] md:w-[50%] m-1 font-mono font-bold text-xl md:text-xl lg:text-3xl h-[100px] shadow-md  shadow-gray-300 rounded-lg flex justify-center items-center">
            Total number of products : {items.length}
          </div>
          <div className=" mx-auto w-[90%] md:w-[50%] m-1 font-mono font-bold text-xl md:text-xl lg:text-3xl h-[100px] shadow-md shadow-gray-300 rounded-lg flex justify-center items-center">
            Total number of orders : {items.length}
          </div>
        </div>
        <div>
          <h1
            className=" w-[90%]  md:w-[50%] px-5  mx-auto m-1 font-mono cursor-pointer font-bold text-xl md:text-2xl lg:text-3xl h-[100px] shadow-md shadow-gray-300 rounded-lg flex justify-between items-center"
            onClick={() => setShowCategories(!showCategories)}
          >
            Categories : 6
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </h1>
          {showCategories && (
            <ul className="w-[90%] md:w-[50%] mx-auto mt-3">
              <li className="w-full font-mono font-bold text-lg md:text-2xl h-[40px] text-center shadow-sm shadow-gray-200 py-2">
                Chair
              </li>
              <li className="w-full font-mono font-bold text-lg md:text-2xl h-[40px] text-center shadow-sm shadow-gray-200 py-2">
                kitchen
              </li>
              <li className="w-full font-mono font-bold text-lg md:text-2xl h-[40px] text-center shadow-sm shadow-gray-200 py-2">
                Lamp
              </li>
              <li className="w-full font-mono font-bold text-lg md:text-2xl h-[40px] text-center shadow-sm shadow-gray-200 py-2">
                Furniture
              </li>
              <li className="w-full font-mono font-bold text-lg md:text-2xl h-[40px] text-center shadow-sm shadow-gray-200  py-2">
                Skin-care
              </li>
              <li className="w-full font-mono font-bold text-lg md:text-2xl h-[40px] text-center shadow-sm shadow-gray-200 py-2">
                electronic
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
