export default function Register() {
  return (
    <div className="container py-5 text-center">
      {/* Heading */}
      <h2 className="fw-bold text-dark mb-3">Join Yuvatma</h2>
      <p className="text-muted mb-4">
        Fill out the form below to register as a new member.
      </p>

      {}
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="ratio ratio-1x1" style={{ minHeight: "800px" }}>
            <iframe
              src="https://forms.gle/DGcgSJJNxc15ycZv9"
              className="border rounded shadow"
              allowFullScreen
              title="Yuvatma Registration Form"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
