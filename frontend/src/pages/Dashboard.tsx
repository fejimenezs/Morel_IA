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

  /* --- datos simples para la gráfica (luego pueden venir del backend) --- */
  const chartData = [
    { label: "Mon", value: 5 },
    { label: "Tue", value: 8 },
    { label: "Wed", value: 6 },
    { label: "Thu", value: 10 },
    { label: "Fri", value: 7 },
  ];

  return (
    <div className="container-fluid py-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h4 className="fw-bold mb-1">Main Dashboard</h4>
          <span className="text-muted">Welcome back</span>
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
              <h6 className="fw-bold mb-3">Recent patients</h6>

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
                        <div className="fw-semibold">{p.fullName}</div>
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

        {/* SUMMARY + CHART */}
        <div className="col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h6 className="fw-bold mb-3 text-center">
                General Summary
              </h6>

              <SimpleLineChart data={chartData} />

              <ul className="list-group list-group-flush mt-4">
                <li className="list-group-item d-flex justify-content-between px-0">
                  <span className="text-muted">Total patients</span>
                  <strong>{stats.patientsCount}</strong>
                </li>

                <li className="list-group-item d-flex justify-content-between px-0">
                  <span className="text-muted">Total sessions</span>
                  <strong>{stats.sessionsCount}</strong>
                </li>

                <li className="list-group-item d-flex justify-content-between px-0">
                  <span className="text-muted">Hours saved</span>
                  <strong>{stats.hoursSaved}h</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =======================
   SIMPLE SVG LINE CHART
======================= */

function SimpleLineChart({
  data,
}: {
  data: { label: string; value: number }[];
}) {
  const width = 320;
  const height = 160;
  const padding = 30;

  const maxValue = Math.max(...data.map((d) => d.value));

  const points = data.map((d, i) => {
    const x =
      padding +
      (i * (width - padding * 2)) / (data.length - 1);
    const y =
      height -
      padding -
      (d.value / maxValue) * (height - padding * 2);
    return `${x},${y}`;
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="180"
    >
      {/* Axes */}
      <line
        x1={padding}
        y1={padding}
        x2={padding}
        y2={height - padding}
        stroke="#ccc"
      />
      <line
        x1={padding}
        y1={height - padding}
        x2={width - padding}
        y2={height - padding}
        stroke="#ccc"
      />

      {/* Line */}
      <polyline
        fill="none"
        stroke="#2563eb"
        strokeWidth="2"
        points={points.join(" ")}
      />

      {/* Points */}
      {points.map((p, i) => {
        const [x, y] = p.split(",").map(Number);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={3}
            fill="#2563eb"
          />
        );
      })}

      {/* Labels */}
      {data.map((d, i) => {
        const x =
          padding +
          (i * (width - padding * 2)) / (data.length - 1);
        return (
          <text
            key={d.label}
            x={x}
            y={height - 10}
            fontSize="10"
            textAnchor="middle"
            fill="#666"
          >
            {d.label}
          </text>
        );
      })}
    </svg>
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

            <div className="text-muted small">{label}</div>
          </div>

          <h3 className="fw-bold mb-1">{value}</h3>

          <small className="text-muted">{footer}</small>
        </div>
      </div>
    </div>
  );
}
