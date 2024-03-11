import React from "react";

const ProductItem = ({ item }) => {
  return (
    <div className="w-[275px] h-[373px] outline-1 outline hover:outline-2 font-mono m-2 p-2 cursor-pointer rounded-lg hover:rounded-none transition-transform transform-gpu hover:scale-90">
      <div className="w-full h-[60%]">
        <img src={item.img} alt="product1" className="object-cover" />
      </div>
      <div className="pt-10 w-[80%] overflow-hidden overflow-ellipsis">
        <p className="font-medium pt-4 pl-2 overflow-hidden overflow-ellipsis whitespace-nowrap w-full ">
          {item.description}
        </p>
        <p className="font-medium text-gray-500  pl-2">
          Category: {item.category}
        </p>
        <p className="font-medium  pl-2 ">Stock: {item.stock}</p>
        <p className="font-semibold  pl-2">$ {item.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
