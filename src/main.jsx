import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { OrderProvider } from "./contexts/OrderContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <OrderProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </OrderProvider>
    </ThemeProvider>
  </StrictMode>
);
