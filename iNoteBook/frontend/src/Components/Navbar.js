import { Link, useNavigate } from "react-router-dom"

export const Navbar = () => {

  return (
    <nav class="navbar navbar-expand-lg bg-dark my-2 mx-2" data-bs-theme="dark">
      <div class="container-fluid">
        <Link class="navbar-brand" href="/">iNoteBook</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <Link className="nav-link" to={"/"}>Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to={"/features"}>Features</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to={"/premium"}>Premium</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to={"/about"}>About</Link>
            </li>
          </ul>
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <form class="d-flex">
                <input class="form-control me-sm-2" type="search" placeholder="Search" />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
              </form>
            </li>
          </ul>

          <ul class="navbar-nav align-items-end">
            <li class="nav-item">
              <Link className="nav-link" to={"/signup"}>Sign Up</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to={"/signin"}>Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}