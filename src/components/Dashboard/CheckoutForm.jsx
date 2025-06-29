import { FaPlus, FaMinus } from "react-icons/fa";

export default function CheckoutForm() {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm text-sm w-[460px]">
      <h2 className="text-lg font-semibold mb-4">🧾 Checkout</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Customer Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <table className="w-full text-left mb-4">
        <thead>
          <tr className="border-b">
            <th className="py-2">Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 max-w-[180px] truncate">
              Big Mac with Double Cheese
            </td>
            <td>$6.49</td>
            <td>1</td>
            <td>$6.49</td>
            <td>
              <div className="flex items-center gap-2">
                <button className="text-red-500 hover:text-red-700 border border-red-300 rounded p-1">
                  <FaMinus size={10} />
                </button>
                <button className="text-green-600 hover:text-green-800 border border-green-300 rounded p-1">
                  <FaPlus size={10} />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2 max-w-[180px] truncate">
              Quarter Pounder with Bacon and Crispy Onion Rings
            </td>
            <td>$7.29</td>
            <td>2</td>
            <td>$14.58</td>
            <td>
              <div className="flex items-center gap-2">
                <button className="text-red-500 hover:text-red-700 border border-red-300 rounded p-1">
                  <FaMinus size={10} />
                </button>
                <button className="text-green-600 hover:text-green-800 border border-green-300 rounded p-1">
                  <FaPlus size={10} />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2 max-w-[180px] truncate">
              Double Cheeseburger with Spicy Jalapeños and Pickles
            </td>
            <td>$5.89</td>
            <td>1</td>
            <td>$5.89</td>
            <td>
              <div className="flex items-center gap-2">
                <button className="text-red-500 hover:text-red-700 border border-red-300 rounded p-1">
                  <FaMinus size={10} />
                </button>
                <button className="text-green-600 hover:text-green-800 border border-green-300 rounded p-1">
                  <FaPlus size={10} />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2 max-w-[180px] truncate">
              McChicken Deluxe with Lettuce and Garlic Mayo Sauce
            </td>
            <td>$5.19</td>
            <td>3</td>
            <td>$15.57</td>
            <td>
              <div className="flex items-center gap-2">
                <button className="text-red-500 hover:text-red-700 border border-red-300 rounded p-1">
                  <FaMinus size={10} />
                </button>
                <button className="text-green-600 hover:text-green-800 border border-green-300 rounded p-1">
                  <FaPlus size={10} />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2 max-w-[180px] truncate">
              6-Piece Chicken McNuggets with Sweet & Sour Sauce
            </td>
            <td>$4.29</td>
            <td>2</td>
            <td>$8.58</td>
            <td>
              <div className="flex items-center gap-2">
                <button className="text-red-500 hover:text-red-700 border border-red-300 rounded p-1">
                  <FaMinus size={10} />
                </button>
                <button className="text-green-600 hover:text-green-800 border border-green-300 rounded p-1">
                  <FaPlus size={10} />
                </button>
              </div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-2 max-w-[180px] truncate">
              Filet-O-Fish with Cheese and Tartar Sauce Combo
            </td>
            <td>$5.09</td>
            <td>1</td>
            <td>$5.09</td>
            <td>
              <div className="flex items-center gap-2">
                <button className="text-red-500 hover:text-red-700 border border-red-300 rounded p-1">
                  <FaMinus size={10} />
                </button>
                <button className="text-green-600 hover:text-green-800 border border-green-300 rounded p-1">
                  <FaPlus size={10} />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-between items-center mb-4 font-semibold">
        <span>Total:</span>
        <span>$17.87</span>
      </div>

      <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition font-semibold">
        Confirm Order
      </button>
    </div>
  );
}
