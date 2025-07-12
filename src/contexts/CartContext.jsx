import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart data (sekali, dari db.json)
  const fetchCart = async () => {
    try {
      const serverCart = await api.getCarts();
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];

      // gabungkan dari API + local (atau pakai local saja)
      setCart(localCart.length ? localCart : serverCart);
    } catch (error) {
      console.error("Failed to fetch cart", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Simpan cart ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Tambah ke cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    let updatedCart;
    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
  };

  // Update jumlah produk
  const updateQty = (id, newQty) => {
    let updatedCart;
    if (newQty <= 0) {
      updatedCart = cart.filter((item) => item.id !== id);
    } else {
      updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      );
    }

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
