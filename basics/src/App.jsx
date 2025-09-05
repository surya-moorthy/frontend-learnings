import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import Counter from "./pages/Counter";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { ProductProvider } from "./context/productContext";

function App() { 
  return (
    <ProductProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/form" element={<Form />} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
