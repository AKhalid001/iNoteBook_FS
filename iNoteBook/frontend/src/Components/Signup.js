import React, { useState } from "react";

export const Signup = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    pass: "",
  });

  // Generic handler for all fields
  const handleOnChange = ({ target: { id, value } }) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const submit =()=>{
    console.log(formData)
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h3 className="text-center mb-4">Create Account</h3>
        <form className="row g-3">
          {/* Name */}
          <div className="col-md-6">
            <input type="text" id='fName' className="form-control" placeholder="First Name" value={formData.fName} onChange={handleOnChange} />
            {/* <textarea className="form-control"  id="myTextarea" rows="10" style={{ backgroundColor: props.mode === 'light' ? "white" : "#313233", color: props.mode === 'light' ? "Black" : "White" }}></textarea> */}
          </div>
          <div className="col-md-6">
            <input type="text" id='lName' className="form-control" placeholder="Last Name" value={formData.lName} onChange={handleOnChange} />
          </div>

          {/* Email & Password */}
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" id='email' className="form-control" placeholder="Enter your email" value={formData.email} onChange={handleOnChange}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" id='pass' className="form-control" placeholder="Enter your password" value={formData.pass} onChange={handleOnChange}/>
          </div>

          {/* Checkbox */}
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                I agree to the terms and conditions
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100" onClick={submit}>
            Sign Up
            </button>
          </div>

          {/* Extra Links */}
          <div className="col-12 text-center mt-3">
            <span className="text-muted">Already have an account? </span>
            <a href="/signin" className="text-decoration-none">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
};
