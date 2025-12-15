import { useNavigate, NavLink } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom fixed-top">
        <div className="container">
          <span className="navbar-brand fw-bold">Morel-IA</span>

          <div className="ms-auto d-flex align-items-center gap-4">
            <NavLink to="/planes" className="nav-link">
              Plans
            </NavLink>

            <button
              className="btn btn-dark btn-sm px-3"
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero text-center">
        <div className="container">
          <h1 className="hero-title">
            Focus on your patients,
            <br />
            <span className="hero-highlight">
              forget administrative work.
            </span>
          </h1>

          <p className="hero-text">
            Morel-IA listens, transcribes, and analyzes your sessions in real time.
            It generates clinical records, detects risks, and creates action plans
            automatically—saving you up to 40% of your time.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <button
              className="btn btn-main btn-lg px-4"
              onClick={() => navigate("/login")}
            >
              Get started now →
            </button>

            <div className="badge-soft d-flex align-items-center gap-2">
              🔒 HIPAA / GDPR compliant
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <h4 className="fw-bold">40%</h4>
              <p className="text-muted">Time saved</p>
            </div>
            <div className="col-md-3">
              <h4 className="fw-bold">10x</h4>
              <p className="text-muted">Higher accuracy</p>
            </div>
            <div className="col-md-3">
              <h4 className="fw-bold">500k+</h4>
              <p className="text-muted">Professionals</p>
            </div>
            <div className="col-md-3">
              <h4 className="fw-bold">100%</h4>
              <p className="text-muted">Secure and private</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Everything you need for a modern practice
            </h2>
            <p className="text-soft mt-2">
              Morel-IA is not just a transcription tool.
              It is your all-in-one clinical assistant.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">🎙️</div>
                <h5 className="feature-title">
                  Smart Transcription
                </h5>
                <p className="feature-text">
                  Capture every word with medical-grade accuracy.
                  Our AI filters noise and structures the dialogue
                  automatically.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h5 className="feature-title">
                  Emotional Analysis
                </h5>
                <p className="feature-text">
                  Detect invisible patterns and visualize levels
                  of stress, anxiety, and progress over time.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card">
                <div className="feature-icon">📄</div>
                <h5 className="feature-title">
                  Automated Documentation
                </h5>
                <p className="feature-text">
                  Generate clinical summaries, SOAP notes, and
                  action plans within seconds after each session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-light py-4">
        <div className="container d-flex justify-content-between">
          <span>© 2025 Morel-IA</span>
          <div className="d-flex gap-3">
            <span className="text-muted">Privacy</span>
            <span className="text-muted">Terms</span>
            <span className="text-muted">Support</span>
          </div>
        </div>
      </footer>
    </>
  );
}
