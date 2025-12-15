import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPatient } from "../services/patients.api";

export default function CreatePatient() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    age: "",
    occupation: "",
    email: "",
    phone: "",
    reason: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createPatient({
        full_name: form.fullName,
        age: form.age ? Number(form.age) : null,
        occupation: form.occupation || null,
        email: form.email || null,
        phone: form.phone || null,
        reason_for_consultation: form.reason || null,
      });

      navigate("/patients");
    } catch (err) {
      console.error(err);
      setError("The patient could not be created");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h4 className="fw-bold mb-4">New patient</h4>

      <form onSubmit={handleSubmit} className="card p-4">
        <div className="mb-3">
          <label className="form-label">Full name</label>
          <input
            className="form-control"
            value={form.fullName}
            onChange={(e) =>
              setForm({ ...form, fullName: e.target.value })
            }
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={form.age}
            onChange={(e) =>
              setForm({ ...form, age: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Occupation</label>
          <input
            className="form-control"
            value={form.occupation}
            onChange={(e) =>
              setForm({ ...form, occupation: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            className="form-control"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Reason for consultation</label>
          <textarea
            className="form-control"
            rows={3}
            value={form.reason}
            onChange={(e) =>
              setForm({ ...form, reason: e.target.value })
            }
          />
        </div>

        {error && (
          <div className="text-danger mb-3">{error}</div>
        )}

        <button
          className="btn btn-main w-100"
          disabled={loading}
        >
          {loading ? "Creating patient…" : "Create patient"}
        </button>
      </form>
    </div>
  );
}
