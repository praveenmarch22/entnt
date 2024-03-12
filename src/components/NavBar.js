import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul className="flex justify-between font-semibold text-xl mr-8">
        <li className="px-4 py-2 text-black   hover:text-gray-400 cursor-pointer">
          <Link to={"/"}> Home</Link>
        </li>

        <li className="px-4 py-2 text-black   hover:text-gray-400 cursor-pointer">
          <Link to={"/products"}> Products</Link>
        </li>

        <li className="px-4 py-2 text-black hover:text-gray-400 cursor-pointer">
          <Link to={"/orders"}> Orders</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
