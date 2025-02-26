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
      name: "The Ice Box",
      price: 100,
      description:
        "Basswood box with a blue milk paint exterior and white/gray fabric bottom. The lid is made from quartersawn ash.",
      image: "/box1.jpg",
      quantity: 1,
      inCart: false,
    },
    {
      id: 2,
      name: "The Blues Box",
      price: 125,
      description:
        "Basswood box made with a blue milk paint exterior and golden yellow fabric bottom. The lid is made from spalted hackberry.",
      image: "/box2.JPG",
      quantity: 1,
      inCart: false,
    },
    {
      id: 3,
      name: "Red Summer Box",
      price: 85,
      description:
        "Basswood box made with burgundy milk paint exterior and a red patterned fabric bottom. The lid is made from solid ash.",
      image: "/box3.JPG",
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
