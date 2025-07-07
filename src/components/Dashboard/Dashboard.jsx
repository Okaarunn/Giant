import TopBar from "./TopBar";
import CheckoutForm from "./CheckoutForm";
import Products from "./Products";

import { useTheme } from "../../contexts/ThemeContext.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export default function Dashboard({ selectedCategory }) {
  const { isDark } = useTheme();
  const { fetchCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.reload) {
      // refresh cart from API
      fetchCart();
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div
      className={`flex-1 rounded-lg m-5 shadow h-[calc(100vh-40px)] flex flex-col relative transition-colors ${
        isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto custom-scroll p-4">
          <Products selectedCategory={selectedCategory} />
        </div>
        <div className="h-auto border-l border-gray-300 p-4">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}
