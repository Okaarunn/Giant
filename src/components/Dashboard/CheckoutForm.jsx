import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../../contexts/OrderContext.jsx";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { useCart } from "../../contexts/CartContext.jsx";

export default function CheckoutForm() {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const { setOrderData } = useOrder();
  const { cart, updateQty } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [nameError, setNameError] = useState(false);

  const calculateTotal = () => {
    return cart
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const handleConfirm = () => {
    if (!customerName.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);
    setOrderData({
      customerName,
      selectedProducts: cart,
    });
    navigate("/order-detail");
  };

  return (
    <div
      className={`border rounded-lg p-4 shadow-lg text-sm w-[460px] ${
        isDark ? "border-gray-500" : "border-gray-200"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">🧾 Checkout</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Customer Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className={`w-full border rounded px-3 py-2 ${
            isDark
              ? "placeholder-white text-white border-gray-600"
              : "placeholder-gray-500 text-black border-gray-300"
          }`}
        />
        {nameError && (
          <p className="text-red-500 text-xs mt-1">
            Nama customer tidak boleh kosong.
          </p>
        )}
      </div>

      <div className="max-h-[330px] overflow-y-auto custom-scroll mb-4">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-3">
                  No products selected.
                </td>
              </tr>
            ) : (
              cart.map((product) => {
                const subtotal = (product.price * product.quantity).toFixed(2);
                return (
                  <tr key={product.id} className="border-b">
                    <td className="py-2 max-w-[180px] truncate">
                      {product.name}
                    </td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.quantity}</td>
                    <td>${subtotal}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(product.id, product.quantity - 1)
                          }
                          className="text-red-500 hover:text-red-700 cursor-pointer border border-red-300 rounded p-1"
                        >
                          <FaMinus size={10} />
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            updateQty(product.id, product.quantity + 1)
                          }
                          className="text-green-600 hover:text-green-800 cursor-pointer  border border-green-300 rounded p-1"
                        >
                          <FaPlus size={10} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mb-4 font-semibold">
        <span>Total:</span>
        <span>${calculateTotal()}</span>
      </div>

      <button
        type="button"
        onClick={handleConfirm}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 cursor-pointer rounded transition font-semibold"
      >
        Confirm Order
      </button>
    </div>
  );
}
