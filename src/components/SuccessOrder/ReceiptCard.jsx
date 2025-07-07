import logo from "/giant.png";

export default function ReceiptCard({
  orderData,
  date,
  time,
  total,
  tax,
  grandTotal,
  isDark,
  printRef,
}) {
  return (
    <div
      ref={printRef}
      className={`receipt print-container w-[378px] p-3 rounded shadow-lg text-sm font-mono overflow-hidden ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-black"
      } print:shadow-none print:bg-white print:text-black`}
    >
      <div className="text-center mb-4">
        <img
          src={logo}
          alt="GIANT Logo"
          className="mx-auto w-20 h-12 object-contain"
        />
        <p className="text-xs">Jl. Fasilkom Wifi Lemot</p>
        <p className="text-xs">IG: giantsupermarket | FB: Giant Supermarket</p>
      </div>

      <hr className="border-t border-dashed my-2 print:border-black" />

      <div className="mb-2 text-xs">
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>Customer: {orderData.customerName}</p>
      </div>

      <hr className="border-t border-dashed my-2 print:border-black" />

      <div className="mb-2">
        {orderData.selectedProducts.map((item, i) => (
          <div key={i} className="mb-1">
            <div>{item.name}</div>
            <div className="flex justify-between">
              <span>
                {item.quantity} x @ {item.price.toLocaleString("en-US")}
              </span>
              <span>
                ${(item.price * item.quantity).toLocaleString("en-US")}
              </span>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-t border-dashed my-2 print:border-black" />

      <div className="text-sm">
        <div className="flex justify-between">
          <span>Sub Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax 10%</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold mt-2">
          <span>Total</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
      </div>

      <hr className="border-t border-dashed my-2 print:border-black" />

      <p className="text-center text-xs mt-4 leading-5">
        Thanks for stopping by! ❤️ <br />
        Have a great day and come back soon!
      </p>
    </div>
  );
}
