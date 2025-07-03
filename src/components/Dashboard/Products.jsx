import ProductCard from "./ProductCard";

export default function Products({ addToCheckout, selectedCategory, isDark }) {
  const products = [
    {
      name: "Burger Deluxe aowkwokwokwo aokwokwowk  ",
      price: 5.99,
      calories: 450,
      image: "food.avif",
      categories: "sandwiches",
    },
    {
      name: "Vegan Salad",
      price: 4.5,
      calories: 220,
      image: "food.avif",
      categories: "meals",
    },
    {
      name: "Kentang goreng",
      price: 4.5,
      calories: 220,
      image: "food.avif",
      categories: "fries",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.categories === selectedCategory);

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
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              calories={product.calories}
              image={product.image}
              onClick={() => addToCheckout(product)}
              isDark={isDark}
            />
          ))}
        </div>
      )}
    </div>
  );
}
