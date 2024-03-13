import React from "react";

const OrderDetails = ({ orderdetails }) => {
  return (
    <div>
      {orderdetails.map((orderitem, index) => (
        <div
          className=" w-[80%] md:w-[60%] flex justify-between mx-auto text-black my-5 text-center"
          key={index}
        >
          <div className="font-normal w-1/3 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {orderitem.name}
          </div>
          <div className="font-normal w-1/3">{orderitem.category}</div>
          <div className="font-normal w-1/3">${orderitem.price}</div>
        </div>
      ))}
    </div>
  );
};

export default OrderDetails;
