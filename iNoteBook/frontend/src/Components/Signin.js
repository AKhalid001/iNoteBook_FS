import React from "react";

export const Signin = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Sign In</h3>
        <form>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="inputEmail3" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="inputPassword3" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me */}
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
            />
            <label className="form-check-label" htmlFor="gridCheck1">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-3">
          <a href="#" className="text-decoration-none">
            Forgot password?
          </a>
          <br />
          <span className="text-muted">Don’t have an account? </span>
          <a href="#" className="text-decoration-none">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};
