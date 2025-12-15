import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../components/Avatar";
import { getPatients } from "../services/patients.api";

type Patient = {
  id: string;
  full_name: string;
  email: string | null;
};

const PAGE_SIZE = 6;

export default function Patients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    getPatients()
      .then(setPatients)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  /* =======================
     FILTER + PAGINATION
  ======================= */

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return patients.filter((p) =>
      p.full_name.toLowerCase().includes(q) ||
      (p.email ?? "").toLowerCase().includes(q)
    );
  }, [patients, search]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const paginated = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <div className="container-fluid py-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1">Patients</h4>
          <span className="text-muted">
            Clinical management and quick access
          </span>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/patients/new")}
        >
          + New patient
        </button>
      </div>

      {/* SEARCH */}
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name or email…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* LIST */}
      <div className="card shadow-sm">
        {loading ? (
          <div className="p-4 text-muted">
            Loading patients…
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-4 text-muted">
            No patients found.
          </div>
        ) : (
          <>
            <ul className="list-group list-group-flush">
              {paginated.map((p) => (
                <li
                  key={p.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center gap-3">
                    <Avatar name={p.full_name} />

                    <div>
                      <div className="fw-semibold">
                        {p.full_name}
                      </div>
                      <small className="text-muted">
                        {p.email ?? "No email"}
                      </small>
                    </div>
                  </div>

                  {/* QUICK ACTIONS */}
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() =>
                        navigate(`/patients/${p.id}`)
                      }
                    >
                      View
                    </button>

                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() =>
                        navigate(`/patients/${p.id}?newSession=true`)
                      }
                    >
                      New session
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-between align-items-center p-3">
                <small className="text-muted">
                  Page {page} of {totalPages}
                </small>

                <div className="btn-group">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    disabled={page === 1}
                    onClick={() => setPage((p) => p - 1)}
                  >
                    ←
                  </button>

                  <button
                    className="btn btn-outline-secondary btn-sm"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => p + 1)}
                  >
                    →
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
