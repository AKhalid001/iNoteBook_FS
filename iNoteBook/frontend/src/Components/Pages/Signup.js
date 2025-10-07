import React, { useContext, useState } from "react";
import { NoteContext } from "../../Context/NoteContext";

export const Signup = () => {
  const { signupRequest } = useContext(NoteContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Generic handler
  const handleOnChange = ({ target: { id, value } }) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleOnClick = () => {
    signupRequest(formData.username, formData.email, formData.password)
  }

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#f4f6f8" }}
    >
      <div
        className="card shadow-sm p-5 rounded-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#333" }}>
          Create Account
        </h2>

        <form onSubmit={submit} className="row g-3">
          {/* Username */}
          <div className="col-12">
            <input
              type="text"
              id="username"
              className="form-control form-control-lg"
              placeholder="Username"
              value={formData.username}
              onChange={handleOnChange}
              required
            />
          </div>

          {/* Email */}
          <div className="col-12">
            <input
              type="email"
              id="email"
              className="form-control form-control-lg"
              placeholder="Email"
              value={formData.email}
              onChange={handleOnChange}
              required
            />
          </div>

          {/* Password */}
          <div className="col-12">
            <input
              type="password"
              id="password"
              className="form-control form-control-lg"
              placeholder="Password"
              value={formData.password}
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
                id="termsCheck"
                required
              />
              <label className="form-check-label" htmlFor="termsCheck">
                I agree to the terms and conditions
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-semibold"
              onClick={handleOnClick}
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
