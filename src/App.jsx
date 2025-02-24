import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import { useState } from "react";
import CartContext from "./contexts/CartContext";

function App() {
  const [cart, setCart] = useState([]);
  const quantity = cart.length;

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Box 1",
      price: 100,
      description: "This is a beautiful box that your loved one will enjoy.",
      image: "src/assets/box1.JPG",
      quantity: 1,
      inCart: false,
    },
    {
      id: 2,
      name: "Box 2",
      price: 125,
      description: "This is a beautiful box that your loved one will enjoy.",
      image: "src/assets/box2.JPG",
      quantity: 1,
      inCart: false,
    },
    {
      id: 3,
      name: "Box 3",
      price: 85,
      description: "This is a beautiful box that your loved one will enjoy.",
      image: "src/assets/box3.JPG",
      quantity: 1,
      inCart: false,
    },
  ]);

  const addToCart = (product) => {
    setProducts(
      products.map((prod) =>
        prod.id === product.id ? { ...prod, inCart: true } : prod
      )
    );
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const { id } = product;
    setProducts(
      products.map((prod) =>
        prod.id === id ? { ...prod, inCart: false } : prod
      )
    );
    setCart(cart.filter((product) => product.id !== id));
  };

  const incrementProductQuantity = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      })
    );
  };

  const decrementProductQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        addToCart,
        removeFromCart,
        incrementProductQuantity,
        decrementProductQuantity,
      }}
    >
      <Navbar quantity={quantity} />
      <Outlet />
    </CartContext.Provider>
  );
}

export default App;
