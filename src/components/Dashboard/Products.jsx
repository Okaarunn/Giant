import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductCard from "./ProductCard";
import { useTheme } from "../../contexts/ThemeContext";
import { useCart } from "../../contexts/CartContext";

export default function Products({ selectedCategory }) {
  const { isDark } = useTheme();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await api.get("/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  // filter product from selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      {filteredProducts.length === 0 ? (
        <p
          className={`text-center py-5 text-sm ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          No products available in this category.
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            // product card
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              calories={product.calories}
              image={product.image}
              onClick={() => addToCart(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
