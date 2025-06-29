import { FiClock } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="border-b border-gray-200 bg-white px-4 pt-6 pb-4 shadow-sm rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-base font-medium text-gray-800">
            🌤 Good morning, everyone!
          </p>
          <p className="text-xs text-gray-500">Tuesday, June 28th, 2025</p>
        </div>

        {/* Clock Button */}
        <button className="flex items-center gap-2 bg-white border border-gray-300 text-xs text-gray-700 hover:bg-violet-50 hover:border-red-400 hover:text-red-700 px-3 py-1.5 rounded-md transition-all">
          <FiClock className="text-red-500 text-sm" />
          <span>20:40 AM</span>
        </button>
      </div>
    </div>
  );
}
