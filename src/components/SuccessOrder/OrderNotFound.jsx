import Lottie from "lottie-react";
import emptyPurchaseOrders from "../../assets/animations/emptyPurchaseOrders.json";
import { useNavigate } from "react-router-dom";

export default function OrderNotFound({ isDark }) {
  const navigate = useNavigate();

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
        className="bg-red-600 hover:bg-red-700 cursor-pointer text-white font-bold px-3 py-2 rounded text-sm md:text-base transition"
      >
        Browse Products
      </button>
    </div>
  );
}
