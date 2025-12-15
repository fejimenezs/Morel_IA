import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";

export default function PrivateLayout() {
  useEffect(() => {
    const theme =
      localStorage.getItem("theme") || "light";
    document.body.className = theme;
  }, []);

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <main className="flex-grow-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
