import React from "react";

const ProductItem = ({ item }) => {
  return (
    <div className="w-[220px] h-[300px] md:w-[275px] md:h-[373px] outline-1 outline hover:outline-2 font-mono m-2 p-2 cursor-pointer rounded-lg hover:rounded-none transition-transform transform-gpu hover:scale-90">
      <div className="w-full h-[57%] md:h-[60%]">
        <img
          src={item.img}
          alt="product1"
          className="object-cover h-full w-full"
        />
      </div>
      <div className=" pt-4 md:pt-10 w-[80%] ">
        <p className=" font-normal  md:font-medium pt-4 pl-2 overflow-hidden overflow-ellipsis whitespace-nowrap w-full ">
          {item.description}
        </p>
        <p className="font-normal  md:font-medium text-gray-500  pl-2 overflow-hidden overflow-ellipsis whitespace-nowrap ">
          Category: {item.category}
        </p>
        <p className="font-normal  md:font-medium  pl-2 ">
          Stock: {item.stock}
        </p>
        <p className="font-medium  md:font-semibold  pl-2">$ {item.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
