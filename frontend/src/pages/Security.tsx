export default function Security() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center">Security and Privacy</h2>
      <p className="text-center">
        We guarantee the security of your data with the strictest privacy standards.
      </p>

      <div className="row">
        <div className="col-md-4">
          <div className="feature-card">
            <h6 className="fw-bold">AES-256 Encryption</h6>
            <p className="text-soft">
              Data protected in transit and at rest.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="feature-card">
            <h6 className="fw-bold">HIPAA / GDPR Compliance</h6>
            <p className="text-soft">
              We comply with international data protection regulations.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="feature-card">
            <h6 className="fw-bold">Privacy by Design</h6>
            <p className="text-soft">
              You retain full ownership of your patients’ data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
