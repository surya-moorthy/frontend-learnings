import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./pages/Form";
import Counter from "./pages/Counter";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() { 
  return (
    <BrowserRouter>
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
  );
}

export default App;
