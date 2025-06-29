import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
