import "./App.css";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Link to="/shoppingpage">Shopping Page</Link>
      <Outlet />
    </>
  );
}

export default App;
