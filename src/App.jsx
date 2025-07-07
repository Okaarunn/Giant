import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import OrderDetail from "./pages/OrderDetail.jsx";
import SuccessOrder from "./pages/SuccessOrder.jsx";
import { useTheme } from "./contexts/ThemeContext.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const { isDark } = useTheme();

  return (
    <div
      className={`${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* dynamic routing */}
          <Route path="/category/:categoryName" element={<Home />} />
          {/* basic routing */}
          <Route path="/order-detail" element={<OrderDetail />} />
          <Route path="/success-order" element={<SuccessOrder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
