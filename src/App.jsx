import "./App.css";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Link to="/shoppingpage">Shopping Page</Link>
      <Outlet />
    </>
  );
}

export default App;
