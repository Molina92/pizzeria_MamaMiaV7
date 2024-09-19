import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./Context/CartContext.jsx";
import DataProvider from "./Context/DataContext.jsx";
import UserProvider from "./Context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <CartProvider>
          <UserProvider>
          <App />
          </UserProvider>
        </CartProvider>
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
