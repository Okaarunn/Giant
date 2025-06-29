import ProductCard from "./ProductCard";
import TopBar from "./TopBar";
import CheckoutForm from "./CheckoutForm";

export default function Dashboard() {
  return (
    <div className="flex-1 bg-white rounded-lg m-5 shadow h-[calc(100vh-40px)] flex flex-col">
      {/* TopBar */}
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-y-auto custom-scroll p-4 ">
          {/* Grid looping product card */}
          <div className="grid grid-cols-3 gap-5">
            <ProductCard
              name="McChicken Deluxe with Lettuce and Garlic Mayo Sauce"
              price="$5.19"
              calories="430"
              image="/food.avif"
            />
            <ProductCard
              name="6-Piece Chicken McNuggets with Sweet & Sour Sauce"
              price="$4.29"
              calories="290"
              image="/food.avif"
            />
            <ProductCard
              name="Filet-O-Fish with Cheese and Tartar Sauce Combo"
              price="$5.09"
              calories="410"
              image="/food.avif"
            />
            <ProductCard
              name="Crispy Chicken Sandwich with Spicy Sauce and Pickles"
              price="$6.19"
              calories="590"
              image="/food.avif"
            />
            <ProductCard
              name="Bacon Ranch McDouble with Extra Cheese and Lettuce"
              price="$5.79"
              calories="670"
              image="/food.avif"
            />
            <ProductCard
              name="Classic Hamburger with Onions, Ketchup, and Mustard"
              price="$3.49"
              calories="300"
              image="/food.avif"
            />
          </div>
        </div>

        {/* checkoutform  */}
        <div className="h-auto border-l border-gray-300 p-4">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}
