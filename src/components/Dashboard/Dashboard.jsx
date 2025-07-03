import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import CheckoutForm from "./CheckoutForm";
import Products from "./Products";
import Notification from "./Notification";

export default function Dashboard({ selectedCategory, isDark }) {
  // jika ada data di local storage
  const [selectedProducts, setSelectedProducts] = useState(() => {
    const saved = localStorage.getItem("selectedProducts");
    return saved ? JSON.parse(saved) : [];
  });

  // Notification
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  const handleAddToCheckout = (product) => {
    const index = selectedProducts.findIndex(
      (item) => item.name === product.name
    );

    if (index !== -1) {
      const updated = [...selectedProducts];
      updated[index].quantity += 1;
      setSelectedProducts(updated);
      setNotification({
        message: "Quantity updated.",
        type: "info",
      });
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
      setNotification({
        message: "Success add product.",
        type: "success",
      });
    }

    setTimeout(() => setNotification(null), 2500);
  };

  // increase decrease qty, remove product from checkout from

  const increaseQty = (index) => {
    const updated = [...selectedProducts];
    updated[index].quantity += 1;
    setSelectedProducts(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...selectedProducts];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setSelectedProducts(updated);
    } else {
      // Jika quantity 1 dan dikurangi → hapus produk
      updated.splice(index, 1);
      setSelectedProducts(updated);
    }
  };

  return (
    <div
      className={`flex-1 rounded-lg m-5 shadow h-[calc(100vh-40px)] flex flex-col relative transition-colors ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      {/* push notification */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      {/* TopBar */}
      <TopBar isDark={isDark} />

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto custom-scroll p-4">
          <Products
            selectedCategory={selectedCategory}
            addToCheckout={handleAddToCheckout}
            isDark={isDark}
          />
        </div>

        <div className="h-auto border-l border-gray-300 p-4">
          <CheckoutForm
            selectedProducts={selectedProducts}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        </div>
      </div>
    </div>
  );
}
