import { useState } from "react";
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = {
    "iNoteBook": "/",
    "Home": "/",
    "Features": "/features",
    "Premium": "/premium",
    "About": "/about",
    "Search": "/",
    "SignUp": "/signup",
    "SignIn": "/signin"
  }
  const classNameValue = "nav-link " + (Object.values(navigate).some(path => path === location.pathname) ? "active" : "");


  return (
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={navigate.iNoteBook}>{Object.keys(navigate)[0]}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className={classNameValue}>
              <Link className="nav-link" to={navigate.Home}>{Object.keys(navigate)[1]}</Link>
            </li>
            <li className={classNameValue}>
              <Link className="nav-link" to={navigate.Features}>{Object.keys(navigate)[2]}</Link>
            </li>
            <li className={classNameValue}>
              <Link className="nav-link" to={navigate.Premium}>{Object.keys(navigate)[3]}</Link>
            </li>
            <li className={classNameValue}>
              <Link className="nav-link" to={navigate.About}>{Object.keys(navigate)[4]}</Link>
            </li>
          </ul>
          {loggedIn && (<ul className="navbar-nav align-items-end">
            <li className={classNameValue}>
              <form className="d-flex">
                <input className="form-control me-sm-2" type="search" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">{Object.keys(navigate)[5]}</button>
              </form>
            </li>
          </ul>)}

          {!loggedIn && (<ul className="navbar-nav align-items-end">
            <li className={classNameValue}>
              <Link className="nav-link" to={navigate.SignUp}>{Object.keys(navigate)[6]}</Link>
            </li>
            <li className={classNameValue}>
              <Link className="nav-link" to={navigate.SignIn}>{Object.keys(navigate)[7]}</Link>
            </li>
          </ul>)}
        </div>
      </div>
    </nav >
  )
}

