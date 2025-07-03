import { useTheme } from "../../contexts/ThemeContext";

export default function ProductCard({ name, price, calories, image, onClick }) {
  const { isDark } = useTheme();
  const imageURL = "/food/";

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer w-full max-w-[250px] h-[270px] rounded-xl overflow-hidden flex flex-col border ${
        isDark ? "border-gray-600 bg-gray-800" : "border-black bg-white"
      } transition`}
    >
      {/* Removed inner background */}
      <div className="h-[200px] flex items-center justify-center p-2">
        <img
          src={imageURL + image}
          alt={name}
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
      <div className="flex flex-col px-2 pb-3 text-left ">
        <div className="flex flex-col flex-grow justify-start min-h-[2.6rem]">
          <h5
            className={`text-sm font-semibold leading-snug line-clamp-2 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            {name}
          </h5>
        </div>
        <div
          className={`text-sm font-bold mt-0.5 ${
            isDark ? "text-gray-100" : "text-gray-900"
          }`}
        >
          $ {price} • {calories} cal
        </div>
      </div>
    </div>
  );
}
