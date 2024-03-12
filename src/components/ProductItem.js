import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/productSlice";
import EditProduct from "./EditProduct";

const ProductItem = ({ item, index }) => {
  const showEdit = useSelector((store) => store.allItems.showEdit);
  const dispatch = useDispatch();
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const deleteProduct = (index) => {
    dispatch(removeItem(index));
  };

  const toggleEditForm = () => {
    setIsEditFormVisible(!isEditFormVisible);
  };
  return (
    <div className="w-[220px] h-[305px] md:w-[275px] md:h-[377px] outline-1 outline hover:outline-2 font-mono m-2 p-2 cursor-pointer rounded-lg hover:rounded-none transition-transform transform-gpu hover:scale-90">
      <div className="w-full h-[57%] md:h-[60%]">
        <img
          src={item.img}
          alt="product1"
          className="object-cover h-full w-full rounded-lg"
        />
      </div>
      <div className="  md:pt-4 w-[80%] ">
        <p className=" font-normal  md:font-medium pt-4 pl-2 overflow-hidden overflow-ellipsis whitespace-nowrap w-full ">
          {item.name}
        </p>
        <p className="font-normal  md:font-medium text-gray-500  pl-2 overflow-hidden overflow-ellipsis whitespace-nowrap ">
          Category: {item.category}
        </p>
        <p className="font-normal  md:font-medium  pl-2 ">
          Stock: {item.stock}
        </p>
        <p className="font-medium  md:font-semibold  pl-2">$ {item.price}</p>
        {showEdit && (
          <div className="flex">
            <p
              className="font-medium  md:font-semibold text-gray-500  pl-2 hover:text-black"
              onClick={() => deleteProduct(index)}
            >
              Delete
            </p>
            <p
              className="font-medium  md:font-semibold text-gray-500  pl-2 hover:text-black"
              onClick={toggleEditForm}
            >
              Edit
            </p>
          </div>
        )}
      </div>
      {isEditFormVisible && (
        <EditProduct item={item} onClose={toggleEditForm} />
      )}
    </div>
  );
};

export default ProductItem;
