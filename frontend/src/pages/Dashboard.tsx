import { useEffect, useMemo, useState } from "react";
import { getDashboardStats } from "../services/dashboard.api";

type Stats = {
  patientsCount: number;
  sessionsCount: number;
  hoursSaved: number;
  latestPatients: {
    id: string;
    fullName: string;
    status: "ACTIVE" | "INACTIVE";
    createdAt: string;
  }[];
  serverNow: string;
};

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    getDashboardStats()
      .then(setStats)
      .catch(console.error);
  }, []);

  const timeLabel = useMemo(
    () =>
      now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    [now]
  );

  if (!stats) {
    return <div className="p-4 text-muted">Loading dashboard…</div>;
  }

  return (
    <div className="container-fluid py-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h4 className="fw-bold mb-1">Main Dashboard</h4>
          <span className="text-muted">
            Welcome back
          </span>
        </div>

        <span className="badge bg-light text-primary px-3 py-2">
          {timeLabel}
        </span>
      </div>

      {/* METRICS */}
      <div className="row g-4 mb-5">
        <StatCard
          icon="👥"
          label="Active Patients"
          value={stats.patientsCount}
          footer="Total registered"
        />

        <StatCard
          icon="⏱️"
          label="Hours Saved"
          value={`${stats.hoursSaved}h`}
          footer="Administrative tasks"
        />

        <StatCard
          icon="🧠"
          label="Sessions"
          value={stats.sessionsCount}
          footer="Historical total"
        />

        <StatCard
          icon="✅"
          label="System Status"
          value="Active"
          footer="Running correctly"
          highlight
        />
      </div>

      {/* CONTENT */}
      <div className="row g-4">
        {/* RECENT PATIENTS */}
        <div className="col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h6 className="fw-bold mb-3">
                Recent patients
              </h6>

              {stats.latestPatients.length === 0 ? (
                <p className="text-muted mb-0">
                  No patients registered yet.
                </p>
              ) : (
                <ul className="list-group list-group-flush">
                  {stats.latestPatients.map((p) => (
                    <li
                      key={p.id}
                      className="list-group-item d-flex justify-content-between align-items-center px-0"
                    >
                      <div>
                        <div className="fw-semibold">
                          {p.fullName}
                        </div>
                        <small className="text-muted">
                          {new Date(p.createdAt).toLocaleDateString()}
                        </small>
                      </div>

                      <span
                        className={`badge ${
                          p.status === "ACTIVE"
                            ? "bg-success"
                            : "bg-secondary"
                        }`}
                      >
                        {p.status}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column justify-content-center text-center">
              <h6 className="fw-bold mb-2">
                General Summary
              </h6>

              <p className="text-muted mb-0">
                All clinical and administrative information
                is up to date and synchronized.
              </p>

              <div className="mt-4">
                <span className="badge bg-primary px-3 py-2">
                  Professional Mode
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =======================
   CARD COMPONENT
======================= */

function StatCard({
  icon,
  label,
  value,
  footer,
  highlight = false,
}: {
  icon: string;
  label: string;
  value: string | number;
  footer: string;
  highlight?: boolean;
}) {
  return (
    <div className="col-md-3">
      <div
        className={`card shadow-sm h-100 ${
          highlight ? "border-primary" : ""
        }`}
      >
        <div className="card-body">
          <div className="d-flex align-items-center gap-3 mb-3">
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#eef2ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              {icon}
            </div>

            <div className="text-muted small">
              {label}
            </div>
          </div>

          <h3 className="fw-bold mb-1">
            {value}
          </h3>

          <small className="text-muted">
            {footer}
          </small>
        </div>
      </div>
    </div>
  );
}
