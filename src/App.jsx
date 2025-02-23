import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import { useState } from "react";
import CartContext from "./contexts/CartContext";

function App() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Box 1",
      price: 100,
      description: "This is a beautiful box that your loved one will enjoy.",
      image: "src/assets/box1.JPG",
    },
  ]);
  const quantity = cart.length;

  const products = [
    {
      id: 1,
      name: "Box 1",
      price: 100,
      description: "This is a beautiful box that your loved one will enjoy.",
      image: "src/assets/box1.JPG",
    },
    {
      id: 2,
      name: "Box 2",
      price: 125,
      description: "This is a beautiful box that your loved one will enjoy.",
      image: "src/assets/box2.JPG",
    },
    {
      id: 3,
      name: "Box 3",
      price: 85,
      description: "This is a beautiful box that your loved one will enjoy.",
      image: "src/assets/box3.JPG",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, products, addToCart }}>
      <Navbar quantity={quantity} />
      <Outlet />
    </CartContext.Provider>
  );
}

export default App;
