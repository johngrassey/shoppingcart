import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const quantity = cart.length;

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      description: "This is a beautiful box that your loved one will enjoy.",
      image: "src/assets/diagonal_far.JPG",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      description: "This is a beautiful box that your loved one will enjoy.",
      image: "src/assets/diagonal_far.JPG",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      description: "This is a beautiful box that your loved one will enjoy.",
      image: "src/assets/diagonal_far.JPG",
    },
  ]);

  return (
    <>
      <Navbar quantity={quantity} />
      <Outlet />
    </>
  );
}

export default App;
