import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <div className="flex-col">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
