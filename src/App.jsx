import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>This is my app.</h1>
      <Link to="/shoppingpage">Shopping Page</Link>
      <Outlet />
    </>
  );
}

export default App;
