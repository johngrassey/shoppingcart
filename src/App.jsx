import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <Outlet />
    </>
  );
}

export default App;
