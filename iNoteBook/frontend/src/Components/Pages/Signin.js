import React from "react";

export const Signin = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ background: "#f4f6f8" }}
    >
      <div
        className="card shadow-sm p-5 rounded-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#333" }}>
          Sign In
        </h2>

        <form>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label fw-semibold">
              Email Address
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="inputEmail"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="inputPassword"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me */}
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-semibold"
            style={{
              fontSize: "1rem",
              borderRadius: "8px",
              transition: "all 0.2s",
            }}
          >
            Sign In
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-4">
          <a href="#" className="text-decoration-none text-primary fw-medium">
            Forgot password?
          </a>
          <p className="text-muted mt-2 mb-0">
            Don’t have an account?{" "}
            <a href="/signup" className="text-decoration-none text-primary fw-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
