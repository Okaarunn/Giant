import ProductCard from "./ProductCard";

import { useTheme } from "../../contexts/ThemeContext";
export default function Products({ addToCheckout, selectedCategory }) {
  const { isDark } = useTheme();
  const products = [
    {
      name: "Burger",
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
    {
      name: "Chicken McNuggets (6 pcs)",
      price: 3.99,
      calories: 270,
      image: "food.avif",
      categories: "meals",
    },
    {
      name: "Happy Meal with Cheeseburger & Milk",
      price: 4.99,
      calories: 500,
      image: "food.avif",
      categories: "happymeals",
    },
    {
      name: "Large French Fries with Extra Salt",
      price: 2.49,
      calories: 340,
      image: "food.avif",
      categories: "fries",
    },
    {
      name: "McCafé Iced Coffee - Caramel Flavor",
      price: 2.99,
      calories: 180,
      image: "food.avif",
      categories: "mccafe_coffees",
    },
    {
      name: "Coca-Cola (Large Size)",
      price: 1.99,
      calories: 200,
      image: "food.avif",
      categories: "beverages",
    },
    {
      name: "Spicy Chicken Sandwich with Mayo",
      price: 6.25,
      calories: 520,
      image: "food.avif",
      categories: "sandwiches",
    },
    {
      name: "Side Salad with Low-Fat Dressing",
      price: 2.75,
      calories: 120,
      image: "food.avif",
      categories: "sides_more",
    },
    {
      name: "Blueberry Muffin from McCafé Bakery",
      price: 2.25,
      calories: 360,
      image: "food.avif",
      categories: "mccafe_bakery",
    },
    {
      name: "Hot Apple Pie (Classic McDonald's Dessert)",
      price: 1.49,
      calories: 240,
      image: "food.avif",
      categories: "sweets_treats",
    },
    {
      name: "20 pc Chicken McNuggets Share Box",
      price: 7.99,
      calories: 900,
      image: "food.avif",
      categories: "shareables",
    },
    {
      name: "Pumpkin Spice Latte Seasonal Edition",
      price: 3.99,
      calories: 320,
      image: "food.avif",
      categories: "seasonal_specials",
    },
    {
      name: "Breakfast Burrito with Sausage & Egg",
      price: 3.59,
      calories: 390,
      image: "food.avif",
      categories: "breakfast",
    },
    // Tambahan baru
    {
      name: "Deluxe Crispy Chicken Sandwich",
      price: 6.75,
      calories: 530,
      image: "food.avif",
      categories: "sandwiches",
    },
    {
      name: "Strawberry Banana Smoothie",
      price: 3.49,
      calories: 250,
      image: "food.avif",
      categories: "beverages",
    },
    {
      name: "Double Cheeseburger",
      price: 3.99,
      calories: 430,
      image: "food.avif",
      categories: "sandwiches",
    },
    {
      name: "Egg McMuffin",
      price: 2.99,
      calories: 300,
      image: "food.avif",
      categories: "breakfast",
    },
    {
      name: "Mocha Frappe",
      price: 3.99,
      calories: 450,
      image: "food.avif",
      categories: "mccafe_coffees",
    },
    {
      name: "Hash Browns",
      price: 1.29,
      calories: 150,
      image: "food.avif",
      categories: "breakfast",
    },
    {
      name: "Filet-O-Fish",
      price: 4.39,
      calories: 390,
      image: "food.avif",
      categories: "sandwiches",
    },
    {
      name: "Oreo McFlurry",
      price: 2.79,
      calories: 510,
      image: "food.avif",
      categories: "desserts",
    },
    {
      name: "Grilled Chicken Wrap",
      price: 4.59,
      calories: 330,
      image: "food.avif",
      categories: "meals",
    },
    {
      name: "Vanilla Cone",
      price: 1.0,
      calories: 200,
      image: "food.avif",
      categories: "desserts",
    },
    {
      name: "Sausage Biscuit",
      price: 2.19,
      calories: 430,
      image: "food.avif",
      categories: "breakfast",
    },
    {
      name: "Chocolate Chip Cookie",
      price: 0.99,
      calories: 160,
      image: "food.avif",
      categories: "sweets_treats",
    },
    {
      name: "Bottled Water",
      price: 1.0,
      calories: 0,
      image: "food.avif",
      categories: "beverages",
    },
    {
      name: "Chicken Caesar Salad",
      price: 5.49,
      calories: 410,
      image: "food.avif",
      categories: "meals",
    },
    {
      name: "Sundae with Hot Fudge",
      price: 2.49,
      calories: 330,
      image: "food.avif",
      categories: "desserts",
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
            />
          ))}
        </div>
      )}
    </div>
  );
}
