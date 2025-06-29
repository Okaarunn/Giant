import { FaMoon, FaSnowflake } from "react-icons/fa";
import Company from "./Company";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="w-72 h-screen bg-[#f8f8f8] text-black flex flex-col justify-between border-r border-gray-300 p-4">
      <div className="mb-6">
        <Company />
      </div>

      {/* Menu List */}
      <div className="flex-1 overflow-y-auto text-[15px] font-medium divide-y divide-gray-300 custom-scroll">
        <SidebarItem label="Sandwiches & Meals" active />
        <SidebarItem label="McNuggets & Meals" />
        <SidebarItem label="Fries" />
        <SidebarItem label="Happy Meals" />
        <SidebarItem label="McCafé Coffees" />
        <SidebarItem label="Beverages" />
        <SidebarItem label="Sides & More" />
        <SidebarItem label="McCafé Bakery" />
        <SidebarItem label="Sweets & Treats" />
        <SidebarItem label="Shareables" />
        <SidebarItem label="Seasonal Specials" />
        <SidebarItem label="Breakfast" />
        <SidebarItem label="Burgers & More" />
        <SidebarItem label="Cold Drinks" />
        <SidebarItem label="Hot Beverages" />
      </div>

      {/* Toggle theme */}

      {/* Wintermode */}
      <div className="border-t border-gray-300 mt-4 pt-4">
        <button className="w-full bg-gradient-to-r from-white to-red-50 hover:from-white hover:to-red-100 transition-all duration-300 border border-red-200 rounded-lg px-4 py-3 shadow flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-red-100 text-red-600 ring-1 ring-red-300">
              <FaSnowflake className="text-md" />
            </div>
            <span className="text-sm font-semibold text-red-700">
              Winter Rose
            </span>
          </div>
          <div className="flex items-center gap-1 text-blue-900 text-sm font-semibold">
            <FaMoon />
            <span>Midnight</span>
          </div>
        </button>
      </div>

      {/* Darkmode */}

      {/* <div className="border-t border-gray-300 mt-4 pt-4">
  <button className="w-full bg-gradient-to-r from-[#1e2a44] to-blue-950 hover:from-[#243354] hover:to-blue-900 transition-all duration-300 border border-[#1e2a44] rounded-lg px-4 py-3 shadow flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-full bg-[#243354] text-white ring-1 ring-blue-300">
        <FaMoon className="text-md" />
      </div>
      <span className="text-sm font-semibold text-white">Nightfall</span>
    </div>
    <div className="flex items-center gap-1 text-blue-200 text-sm">
      <FaSnowflake />
      <span>Winter</span>
    </div>
  </button>
</div>
 */}
    </div>
  );
}
