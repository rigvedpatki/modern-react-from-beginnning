import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ProductContextProvider from "./context/ProductContextProvider.tsx";
import CartContextProvider from "./context/CartContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  </StrictMode>,
);
