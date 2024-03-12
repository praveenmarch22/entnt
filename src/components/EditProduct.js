import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editItem } from "../utils/productSlice";

const EditProduct = ({ item, onClose }) => {
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [stock, setStock] = useState(item.stock);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      editedId: item.id,
      editedName: name,
      editedPrice: price,
      editedStock: stock,
    };
    dispatch(editItem(data));
    onClose();
  };

  return (
    <div className="fixed top-0 left-0  md:w-full md:h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-lg font-semibold -mt-3 md:mb-4">Edit Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="md:mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Stock:
            </label>
            <input
              type="text"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Price:
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />

          <div className="flex justify-between mt-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2 hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
