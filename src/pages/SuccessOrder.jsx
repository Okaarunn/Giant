import React, { useRef, useEffect } from "react";
import { useOrder } from "../contexts/OrderContext";
import { useTheme } from "../contexts/ThemeContext";
import logo from "/giant.png";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import emptyPurchaseOrders from "../assets/animations/emptyPurchaseOrders.json";

const SuccessOrder = () => {
  const { orderData } = useOrder();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const printRef = useRef(null);

  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-GB");
  const formattedTime = now.toLocaleTimeString("en-GB");

  const total = orderData.selectedProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = total * 0.1;
  const grandTotal = total + tax;

  // Show animation if no order
  if (!orderData.customerName || orderData.selectedProducts.length === 0) {
    return (
      <div
        className={`flex flex-col items-center justify-center min-h-screen text-center px-4 ${
          isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="w-full max-w-md mb-6">
          <Lottie animationData={emptyPurchaseOrders} loop={true} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Oops! No Orders Yet
        </h2>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-6">
          You haven’t added any products to your cart.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-2 rounded text-sm md:text-base transition"
        >
          Browse Products
        </button>
      </div>
    );
  }

  // Auto-print if valid
  useEffect(() => {
    setTimeout(() => {
      if (printRef.current) {
        window.print();
      }
    }, 600);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div
        ref={printRef}
        className={`receipt print-container p-4 rounded shadow-lg text-sm font-mono ${
          isDark ? "bg-gray-800 text-white" : "bg-white text-black"
        } print:shadow-none print:bg-white print:text-black`}
      >
        {/* Logo & Header */}
        <div className="text-center mb-4">
          <img
            src={logo}
            alt="GIANT Logo"
            className="mx-auto w-20 h-12 object-contain"
          />
          <p className="text-xs">Jl. Fasilkom Wifi Lemot</p>
          <p className="text-xs">
            IG: giantsupermarket | FB: Giant Supermarket
          </p>
        </div>

        <hr className="border-t border-dashed my-2 print:border-black" />

        {/* Time Info */}
        <div className="mb-2 text-xs">
          <p>Date: {formattedDate}</p>
          <p>Time: {formattedTime}</p>
          <p>Customer: {orderData.customerName}</p>
        </div>

        <hr className="border-t border-dashed my-2 print:border-black" />

        {/* Product List */}
        <div className="mb-2">
          {orderData.selectedProducts.map((item, i) => (
            <div key={i} className="mb-1">
              <div>{item.name}</div>
              <div className="flex justify-between">
                <span>
                  {item.quantity} x @ {item.price.toLocaleString("en-US")}
                </span>
                <span>
                  ${(item.price * item.quantity).toLocaleString("en-US")}
                </span>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-t border-dashed my-2 print:border-black" />

        {/* Summary */}
        <div className="text-sm">
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax 10%</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold mt-2">
            <span>Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>

        <hr className="border-t border-dashed my-2 print:border-black" />

        {/* Footer */}
        <p className="text-center text-xs mt-4 leading-5">
          Thanks for stopping by! ❤️ <br />
          Have a great day and come back soon!
        </p>
      </div>
    </div>
  );
};

export default SuccessOrder;
