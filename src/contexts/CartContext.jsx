import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const res = await api.get("/carts");
    setCart(res.data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    const res = await api.get(`/carts?id=${product.id}`);
    const existing = res.data[0];

    if (existing) {
      await api.patch(`/carts/${existing.id}`, {
        quantity: existing.quantity + 1,
      });
    } else {
      await api.post("/carts", { ...product, quantity: 1 });
    }

    console.log("Add to cart clicked", product);
    fetchCart();
  };

  const updateQty = async (id, newQty) => {
    if (newQty <= 0) {
      await api.delete(`/carts/${id}`);
    } else {
      await api.patch(`/carts/${id}`, { quantity: newQty });
    }
    fetchCart();
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
