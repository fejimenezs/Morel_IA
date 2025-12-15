import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-decoration-none px-3 py-2 rounded ${
      isActive ? "bg-primary text-white" : "text-light"
    }`;

  return (
    <aside
      className="d-flex flex-column p-3"
      style={{
        width: 240,
        minHeight: "100vh",
        background: "#020617",
        color: "white",
      }}
    >
      {/* LOGO */}
      <div className="mb-4">
        <h5 className="fw-bold mb-1">Morel-IA</h5>
        <small style={{ color: "#94a3b8" }}>
          Artificial Intelligence
        </small>
      </div>

      {/* NAV */}
      <nav className="d-flex flex-column gap-2 flex-grow-1">
        <NavLink to="/dashboard" className={linkClass}>
          🧠 Main Dashboard
        </NavLink>

        <NavLink to="/patients" className={linkClass}>
          👥 Patients
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          ⚙️ Settings
        </NavLink>
      </nav>

      {/* LOGOUT */}
      <div className="pt-3 border-top">
        <button
          onClick={handleLogout}
          className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2"
        >
          <span>⎋</span>
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
