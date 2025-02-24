import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import ShoppingPage from "./components/ShoppingPage/ShoppingPage";
import MainPage from "./components/MainPage/MainPage";
import Checkout from "./components/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "/shoppingpage",
        element: <ShoppingPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
