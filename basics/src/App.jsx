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
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  
  const {value,setValue} = useLocalStorage("name",()=>"");
  
  return (

    <input 
    type="text" 
    value={value}
    onChange={(event)=>{setValue(event.target.value)}}
    />
  );
}

export default App;
