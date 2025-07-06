import React, { useState } from "react";

import { useOrder } from "../contexts/OrderContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import TopBar from "../components/Dashboard/TopBar";
import ConfirmModal from "../components/OrderDetail/ConfirmModal";
import { FiHome, FiChevronRight, FiFileText } from "react-icons/fi";

import Lottie from "lottie-react";
import emptyCartAnimation from "../assets/animations/empty.json"; // sesuaikan path

export default function DetailOrder() {
  // get order data from order context
  const { orderData } = useOrder();
  // navigate
  const navigate = useNavigate();
  // dark
  const { isDark } = useTheme();

  // show modal
  const [showModal, setShowModal] = useState(false);

  const total = orderData.selectedProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // if order data 0
  if (!orderData.customerName || orderData.selectedProducts.length === 0) {
    return (
      <div
        className={`flex flex-col items-center justify-center min-h-screen text-center px-4 ${
          isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        {/* BIG animation center screen */}
        <div className="w-full max-w-md mb-6">
          <Lottie animationData={emptyCartAnimation} loop={true} />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Oops! No Orders Yet
        </h2>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-6">
          You haven’t added any products to your cart.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-red-600  hover:bg-red-700 text-white font-bold px-3 py-2 cursor-pointer rounded text-sm md:text-base transition"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen p-4 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <TopBar />

      <div className="w-full pt-2">
        {/* Breadcrumb */}

        {/* Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* Order Table */}

          <div
            className={`flex-1 p-6 rounded-lg shadow ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="mb-8 flex items-center text-sm text-gray-500 space-x-2">
              <FiHome className={isDark ? "text-white" : "text-blue-500"} />
              <span
                className={`cursor-pointer hover:underline ${
                  isDark ? "text-white" : "text-blue-500"
                }`}
                onClick={() => navigate("/")}
              >
                Home
              </span>
              <FiChevronRight />
              <span className="text-gray-400">Summary</span>
            </div>

            <h3 className="text-xl font-semibold mb-4">Order Details</h3>

            {/* Scrollable table wrapper */}
            <div className="overflow-x-auto custom-scroll max-h-[460px]">
              <table className="min-w-full text-sm">
                <thead>
                  <tr
                    className={`text-left border-b font-medium ${
                      isDark ? "border-gray-600" : "border-gray-200"
                    }`}
                  >
                    <th className="py-2">Product Name</th>
                    <th className="py-2">Price</th>
                    <th className="py-2">Qty</th>
                    <th className="py-2">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.selectedProducts.map((product, idx) => (
                    <tr
                      key={idx}
                      className={`border-b ${
                        isDark ? "border-gray-700" : "border-gray-300"
                      }`}
                    >
                      <td className="py-2">{product.name}</td>
                      <td className="py-2">${product.price.toFixed(2)}</td>
                      <td className="py-2">{product.quantity}</td>
                      <td className="py-2 font-semibold">
                        ${(product.price * product.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Card */}
          <div
            className={`w-full lg:w-[320px] p-6 rounded-lg shadow h-fit ${
              isDark ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FiFileText className={isDark ? "text-white" : "text-black"} />
              Summary
            </h3>

            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">Customer Name</p>
              <p className="font-semibold border-b pb-2">
                {orderData.customerName}
              </p>
            </div>

            <div className=" pt-4 mt-4 flex justify-between font-semibold">
              <span>Total:</span>
              <span className={isDark ? "text-white" : "text-red-500"}>
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition cursor-pointer"
            >
              Confirm Order
            </button>

            <ConfirmModal
              show={showModal}
              onClose={() => setShowModal(false)}
              onConfirm={() => navigate("/success-order")}
              title="Are you sure?"
              message="You’re about to place this order. Do you want to continue?"
            />

            <button
              onClick={() => navigate("/")}
              className={`mt-6 w-full py-2 px-4 rounded font-medium transition-all duration-300 ease-in-out ${
                isDark
                  ? // dark
                    "bg-gray-700 hover:bg-gray-800 text-white border border-transparent hover:border-white cursor-pointer"
                  : // light
                    "bg-gray-700 hover:bg-transparent text-white hover:text-gray-800 border border-transparent hover:border-gray-800 cursor-pointer"
              }`}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
