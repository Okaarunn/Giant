import React, { useEffect, useRef, useState } from "react";
import { useOrder } from "../contexts/OrderContext";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

import OrderNotFound from "../components/SuccessOrder/OrderNotFound";
import ReceiptCard from "../components/SuccessOrder/ReceiptCard";
import SuccessAnimation from "../components/SuccessOrder/SuccessAnimation";

const SuccessOrder = () => {
  const { orderData, setOrderData } = useOrder();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const printRef = useRef(null);
  const [isDone, setIsDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [localOrderData, setLocalOrderData] = useState(orderData);

  // Load from localStorage if order data is empty
  useEffect(() => {
    if (!orderData.customerName || orderData.selectedProducts.length === 0) {
      const savedOrder = localStorage.getItem("orderData");
      if (savedOrder) {
        setLocalOrderData(JSON.parse(savedOrder));
      }
    } else {
      localStorage.setItem("orderData", JSON.stringify(orderData));
    }
  }, [orderData]);

  // Format current date and time
  const now = new Date();
  const formattedDate = now.toLocaleDateString("id-ID");
  const formattedTime = now.toLocaleTimeString("id-ID");

  // Computed: Total, tax, grand total
  const total = localOrderData.selectedProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = total * 0.1;
  const grandTotal = total + tax;

  // Show Order Not Found screen if no valid data
  if (
    !localOrderData.customerName ||
    localOrderData.selectedProducts.length === 0
  ) {
    return <OrderNotFound isDark={isDark} />;
  }

  // Trigger browser print
  const handlePrint = () => {
    window.print();
  };

  // handle done button click, play animation, clear order data, navigate
  const handleDone = () => {
    setIsDone(true);

    setTimeout(() => {
      setFadeOut(true);
    }, 5000);

    setTimeout(() => {
      setOrderData({ customerName: "", selectedProducts: [] });
      localStorage.removeItem("orderData");
      navigate("/", { state: { reload: true } });
    }, 4000);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {isDone && <SuccessAnimation fadeOut={fadeOut} />}
      <ReceiptCard
        orderData={localOrderData}
        date={formattedDate}
        time={formattedTime}
        total={total}
        tax={tax}
        grandTotal={grandTotal}
        isDark={isDark}
        printRef={printRef}
      />
      <div className="mt-6 flex gap-4 no-print">
        <button
          onClick={handlePrint}
          className="bg-red-600 hover:bg-red-700 text-white cursor-pointer  font-bold px-4 py-2 rounded transition"
        >
          🧾 Print Receipt
        </button>
        <button
          onClick={handleDone}
          className="bg-green-600 hover:bg-green-700 text-white cursor-pointer font-bold px-4 py-2 rounded transition"
        >
          ✅ Done
        </button>
      </div>
    </div>
  );
};

export default SuccessOrder;
