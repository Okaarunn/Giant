import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // fetch data cart
  const fetchCart = async () => {
    const res = await api.get("/carts");
    setCart(res.data);
  };

  useEffect(() => {
    // mount cart
    fetchCart();
  }, []);

  // handle add to cart func
  const addToCart = async (product) => {
    const res = await api.get(`/carts?id=${product.id}`);
    const existing = res.data[0];

    if (existing) {
      // if product already exist in cart
      await api.patch(`/carts/${existing.id}`, {
        quantity: existing.quantity + 1,
      });
    } else {
      // if product not exist in cart
      await api.post("/carts", { ...product, quantity: 1 });
    }

    // mount cart
    fetchCart();
  };

  // handle update qty
  const updateQty = async (id, newQty) => {
    if (newQty <= 0) {
      // qty < 0 remove product from cart
      await api.delete(`/carts/${id}`);
    } else {
      // qty > 0
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
