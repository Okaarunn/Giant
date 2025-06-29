export default function ProductCard({ image, name, price, calories }) {
  return (
    <div className="w-full max-w-[250px] h-[270px] border border-black rounded-xl overflow-hidden flex flex-col">
      <div className="h-[200px] flex items-center justify-center bg-white p-2">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
      <div className="flex flex-col px-4 pb-3 pt-2 text-left h-full">
        <div className="flex flex-col flex-grow justify-end min-h-[2.6rem]">
          <h5 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
            {name}
          </h5>
        </div>
        <div className="text-sm font-bold text-gray-900 mt-1">
          {price} • {calories} cal
        </div>
      </div>
    </div>
  );
}
