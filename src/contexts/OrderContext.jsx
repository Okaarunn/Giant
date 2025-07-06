import { createContext, useContext, useState, useEffect } from "react"; // ✅ jangan lupa useEffect

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orderData, setOrderData] = useState(() => {
    const saved = localStorage.getItem("orderData");
    return saved
      ? JSON.parse(saved)
      : { customerName: "", selectedProducts: [] };
  });

  useEffect(() => {
    localStorage.setItem("orderData", JSON.stringify(orderData));
  }, [orderData]);

  return (
    <OrderContext.Provider value={{ orderData, setOrderData }}>
      {children}
    </OrderContext.Provider>
  );
};
