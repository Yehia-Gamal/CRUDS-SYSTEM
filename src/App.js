import "./App.css";

import Header from "./Components/Header";

import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Sidebar from "./Components/Sidebar";
import AddProduct from "./Pages/AddProduct";
import ProductDetails from "./Pages/ProductDetails";
import EditProduct from "./Pages/EditProduct";

function App() {

  return (
    <div className="App">
      <Header />
      <div className="row justify-content-end">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="main-section col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="products/edit" element={<EditProduct />} />
            <Route path="products/:productID" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
