import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="bg-white border-bottom px-4 py-3 d-flex justify-content-end">
      <button className="btn btn-outline-secondary btn-sm" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
