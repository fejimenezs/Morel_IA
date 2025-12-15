import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPatientById } from "../services/patients.api";
import {
  generateSessionAnalysis,
  getSessionAnalysis,
} from "../services/sessionAnalysis.api";

/* =======================
   TYPES
======================= */

type Session = {
  id: string;
  title: string | null;
  status: "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED";
  created_at: string;
};

type Patient = {
  id: string;
  full_name: string;
  age: number | null;
  occupation: string | null;
  email: string | null;
  phone: string | null;
  reason_for_consultation: string | null;
  status: "ACTIVE" | "INACTIVE";
  sessions: Session[];
};

export default function PatientProfile() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [patient, setPatient] = useState<Patient | null>(null);
  const [listening, setListening] = useState(false);
  const [loadingAI, setLoadingAI] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    getPatientById(id)
      .then(setPatient)
      .catch(console.error);
  }, [id]);

  /* =======================
     SIMULATED AI
  ======================= */

  const handleGenerateAI = async (sessionId: string) => {
    try {
      setAnalysis(null);
      setListening(true);

      // 🎙️ Recording simulation
      await new Promise((res) => setTimeout(res, 2000));

      setListening(false);
      setLoadingAI(true);

      await generateSessionAnalysis(sessionId);
      const result = await getSessionAnalysis(sessionId);

      setAnalysis(result);
    } finally {
      setListening(false);
      setLoadingAI(false);
    }
  };

  if (!patient) {
    return <div className="p-4 text-muted">Loading patient...</div>;
  }

  return (
    <div className="p-4">
      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-link mb-3 text-decoration-none"
      >
        ← Back
      </button>

      {/* HEADER */}
      <div className="d-flex align-items-center mb-4">
        <div
          className="me-3 d-flex align-items-center justify-content-center"
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "#6366f1",
            color: "#fff",
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          {patient.full_name.charAt(0)}
        </div>

        <div>
          <h4 className="fw-bold mb-0">{patient.full_name}</h4>
          <small className="text-muted">
            {patient.occupation || "—"}
          </small>
        </div>
      </div>

      {/* INFO */}
      <div className="card mb-4 p-3">
        <p><strong>Age:</strong> {patient.age ?? "—"}</p>
        <p><strong>Email:</strong> {patient.email ?? "—"}</p>
        <p><strong>Phone:</strong> {patient.phone ?? "—"}</p>
        <p className="mb-0">
          <strong>Reason:</strong>{" "}
          {patient.reason_for_consultation ?? "—"}
        </p>
      </div>

      {/* SESSIONS */}
      <div className="card p-3 mb-4">
        <h6 className="fw-bold mb-3">Sessions</h6>

        {patient.sessions.length === 0 ? (
          <p className="text-muted mb-0">
            This patient has no sessions.
          </p>
        ) : (
          <ul className="list-group">
            {patient.sessions.map((s) => (
              <li
                key={s.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <div className="fw-semibold">
                    {s.title || "Session"}
                  </div>
                  <small className="text-muted">
                    {new Date(s.created_at).toLocaleDateString()}
                  </small>

                  <div>
                    <button
                      className="btn btn-outline-primary btn-sm mt-2"
                      onClick={() => handleGenerateAI(s.id)}
                      disabled={listening || loadingAI}
                    >
                      🎙️ Analyze with AI
                    </button>
                  </div>
                </div>

                <span
                  className={`badge ${
                    s.status === "COMPLETED"
                      ? "bg-success"
                      : s.status === "PROCESSING"
                      ? "bg-warning"
                      : "bg-secondary"
                  }`}
                >
                  {s.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* MICROPHONE */}
      {listening && (
        <div className="card p-4 text-center mb-4">
          <div style={{ fontSize: 48 }}>🎙️</div>
          <p className="fw-bold mb-1">Listening to session…</p>
          <small className="text-muted">Simulated recording</small>
        </div>
      )}

      {/* PROCESSING */}
      {loadingAI && (
        <div className="card p-4 text-center mb-4">
          <p className="fw-bold mb-1">🧠 Analyzing with AI…</p>
          <small className="text-muted">Processing in progress</small>
        </div>
      )}

      {/* RESULT */}
      {analysis && (
        <div className="card p-4">
          <h6 className="fw-bold mb-3">🧠 AI Analysis</h6>

          <p><strong>Summary:</strong><br />{analysis.summary}</p>
          <p><strong>Transcription:</strong><br />{analysis.transcription}</p>

          <p>
            <strong>Sentiment:</strong>{" "}
            <span className="badge bg-success">
              {analysis.sentimentScore}
            </span>
          </p>

          <p>
            <strong>Emotions:</strong>{" "}
            {analysis.emotions?.join(", ")}
          </p>

          <p className="mb-0">
            <strong>Risk:</strong>{" "}
            {analysis.risks?.level}
          </p>
        </div>
      )}
    </div>
  );
}
