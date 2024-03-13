import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import DashBoard from "./components/DashBoard";
import AddProduct from "./components/product_components/AddProduct";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./components/product_components/Products";
import OrdersCalendarView from "./components/orders_components/OrdersCalendarView ";
import Orders from "./components/orders_components/Orders";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/calenderview",
        element: <OrdersCalendarView />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
