import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return; // prevent double submit
    setError("");
    setLoading(true);

    try {
      const cleanEmail = email.trim().toLowerCase();

      const { access_token } = await login(
        cleanEmail,
        password
      );

      localStorage.setItem("token", access_token);
      navigate("/dashboard");
    } catch {
      setError("Incorrect email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <div
        className="login-card shadow p-4"
        style={{ width: 380 }}
      >
        {/* LOGO + HEADER */}
        <div className="text-center mb-4">
          <img
            src="/logo.png"
            alt="Morel-IA"
            style={{
              width: 64,
              height: 64,
              marginBottom: 12,
            }}
          />
          <h5 className="fw-bold mb-1">Morel-IA</h5>
          <p className="text-muted mb-0">
            Professional access
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              autoFocus
              disabled={loading}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
              disabled={loading}
            />
          </div>

          {error && (
            <div className="alert alert-danger py-2 text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-main w-100 mt-2"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
