import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addItem } from "../utils/productSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((store) => store.allItems.items);

  const [newProduct, setNewProduct] = useState({
    id: "",
    category: "",
    stock: "",
    img: "",
    name: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewProduct({ ...newProduct, img: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.length === 0) {
      setNewProduct({ ...newProduct, id: 1 });
    } else {
      setNewProduct({ ...newProduct, id: items[items.length - 1].id + 1 });
    }
    dispatch(addItem(newProduct));
    navigate("/products");
  };

  return (
    <div className=" w-[90%] mx-auto md:w-[50%] mt-2">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-lg font-semibold mb-4">Add Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              placeholder="Name.."
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              className="border-b-2 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category:
            </label>
            <select
              id="category"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              className="border-b-2 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">Select Category</option>
              <option value="Chair">Chair</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Lamp">Lamp</option>
              <option value="Furniture">Furniture</option>
              <option value="Skin-care">Skin-care</option>
              <option value="Electronic">Electronic</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-700"
            >
              Stock:
            </label>
            <input
              type="number"
              placeholder="Stock.."
              name="stock"
              value={newProduct.stock}
              onChange={handleInputChange}
              className="border-b-2 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price:
            </label>
            <input
              type="number"
              placeholder="Price.."
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="border-b-2 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="img"
              className="block text-sm font-medium text-gray-700"
            >
              Image:
            </label>
            <input
              type="file"
              name="img"
              accept="image/*"
              onChange={handleImageUpload}
              className="border-b-2 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add Product
            </button>
            <div className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2 hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
              <Link to={"/products"}> Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
