import { useNavigate } from "react-router-dom";

export default function Plans() {
  const navigate = useNavigate();

  return (
    <>
      {/* HEADER */}
      <section className="public-page">
        <div className="container position-relative">
          {/* BACK */}
          <button
            className="btn btn-link position-absolute start-0 top-0"
            style={{
              textDecoration: "none",
              color: "#64748b",
              padding: 0,
            }}
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

          <div className="text-center">
            <h1 className="fw-bold">
              Invest in your time,{" "}
              <span className="hero-highlight">improve your practice.</span>
            </h1>
            <p className="page-description">
              Choose the plan that fits your patient volume.
              Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="public-section">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* STARTER */}
            <div className="col-md-4">
              <div className="feature-card text-center">
                <h6 className="text-muted">Starter</h6>
                <h2 className="fw-bold my-3">$0</h2>
                <p className="text-muted mb-4">To get started</p>

                <ul className="list-unstyled text-start small">
                  <li>✔ Basic transcription</li>
                  <li>✔ Up to 5 patients</li>
                  <li>✔ Clinical history</li>
                </ul>

                <button className="btn btn-outline-primary w-100 mt-3">
                  Start for free
                </button>
              </div>
            </div>

            {/* PROFESSIONAL */}
            <div className="col-md-4">
              <div
                className="feature-card text-center"
                style={{
                  border: "2px solid #2563eb",
                }}
              >
                <span className="badge bg-primary mb-2">
                  Most popular
                </span>

                <h6 className="text-muted">Professional</h6>
                <h2 className="fw-bold my-3">$29</h2>
                <p className="text-muted mb-4">per month</p>

                <ul className="list-unstyled text-start small">
                  <li>✔ Unlimited transcription</li>
                  <li>✔ Emotional analysis</li>
                  <li>✔ Automatic SOAP notes</li>
                  <li>✔ Priority support</li>
                </ul>

                <button className="btn btn-main w-100 mt-3">
                  14-day free trial
                </button>
              </div>
            </div>

            {/* CLINIC */}
            <div className="col-md-4">
              <div className="feature-card text-center">
                <h6 className="text-muted">Clinic / Enterprise</h6>
                <h2 className="fw-bold my-3">Custom</h2>
                <p className="text-muted mb-4">
                  For teams and organizations
                </p>

                <ul className="list-unstyled text-start small">
                  <li>✔ Unlimited users</li>
                  <li>✔ Advanced integrations</li>
                  <li>✔ Enterprise-grade security</li>
                </ul>

                <button className="btn btn-outline-dark w-100 mt-3">
                  Contact sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DARK SECTION */}
      <section className="public-section dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-light">
              <h3 className="fw-bold mb-3">
                Need a custom plan?
              </h3>
              <p className="text-light opacity-75">
                We design tailored solutions for clinics,
                foundations, and organizations.
              </p>

              <ul className="small">
                <li>✔ Assisted migration</li>
                <li>✔ Dedicated support</li>
                <li>✔ Enterprise SLA</li>
              </ul>
            </div>

            <div className="col-md-6">
              <div className="login-card">
                <h6 className="fw-bold mb-3">
                  Request sales contact
                </h6>

                <input
                  className="form-control mb-2"
                  placeholder="Name"
                />
                <input
                  className="form-control mb-2"
                  placeholder="Business email"
                />
                <input
                  className="form-control mb-3"
                  placeholder="Organization"
                />

                <button className="btn btn-main w-100">
                  Request a call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="public-section">
        <div className="container text-center">
          <h4 className="fw-bold mb-4">Frequently asked questions</h4>

          <div className="mx-auto" style={{ maxWidth: 600 }}>
            <p className="text-muted">
              Can I change my plan later?
            </p>
            <p className="text-muted">
              What payment methods do you accept?
            </p>
            <p className="text-muted">
              Is my data secure?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
