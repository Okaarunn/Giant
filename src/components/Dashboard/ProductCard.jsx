import { useTheme } from "../../contexts/ThemeContext";
export default function ProductCard({ name, price, calories, image, onClick }) {
  const { isDark } = useTheme();
  const imageURL = "/food/";
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`cursor-pointer w-full max-w-[250px] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 ${
        isDark
          ? "bg-gray-800 ring-1 ring-gray-600"
          : "bg-white ring-1 ring-gray-200"
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageURL + image}
          alt={name}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col h-auto">
        <h5
          className={`text-sm font-semibold tracking-wide leading-snug line-clamp-2 text-balance ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {name}
        </h5>
        <div
          className={`text-sm font-bold mt-2 ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
        >
          ${price} • {calories} cal
        </div>
      </div>
    </div>
  );
}
