import React, { useState } from "react";

export const Signup = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    pass: "",
  });

  // Generic handler
  const handleOnChange = ({ target: { id, value } }) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#f4f6f8" }}
    >
      <div
        className="card shadow-sm p-5 rounded-4"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#333" }}>
          Create Account
        </h2>

        <form className="row g-3" onSubmit={submit}>
          {/* Name Fields */}
          <div className="col-md-6">
            <input
              type="text"
              id="fName"
              className="form-control form-control-lg"
              placeholder="First Name"
              value={formData.fName}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              id="lName"
              className="form-control form-control-lg"
              placeholder="Last Name"
              value={formData.lName}
              onChange={handleOnChange}
              required
            />
          </div>

          {/* Email & Password */}
          <div className="col-md-6">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="pass" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              id="pass"
              className="form-control form-control-lg"
              placeholder="Enter your password"
              value={formData.pass}
              onChange={handleOnChange}
              required
            />
          </div>

          {/* Terms Checkbox */}
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                required
              />
              <label className="form-check-label" htmlFor="gridCheck">
                I agree to the terms and conditions
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-semibold"
              style={{ fontSize: "1rem", borderRadius: "8px" }}
            >
              Sign Up
            </button>
          </div>

          {/* Extra Links */}
          <div className="col-12 text-center mt-3">
            <span className="text-muted">Already have an account? </span>
            <a href="/signin" className="text-decoration-none text-primary fw-medium">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
