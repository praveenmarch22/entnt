import React from "react";

const NavBar = () => {
  return (
    <>
      <ul className="flex justify-between font-semibold text-xl mr-8">
        <li className="px-4 py-2 text-black   hover:text-gray-400 cursor-pointer">
          Home
        </li>
        <li className="px-4 py-2 text-black   hover:text-gray-400 cursor-pointer">
          Products
        </li>
        <li className="px-4 py-2 text-black hover:text-gray-400 cursor-pointer">
          Orders
        </li>
        <li className="px-4 py-2 text-black  hover:text-gray-400 cursor-pointer">
          Cart
        </li>
      </ul>
    </>
  );
};

export default NavBar;
