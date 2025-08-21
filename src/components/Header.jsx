import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img
              src="./src/assets/img/logo_32x32.png"
              alt="Logo"
              width={30}
              height={24}
              className="d-inline-block align-text-top"
            />
          </a>
          {/* Bootstrap Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* Home */}
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {/* Sentieri */}
                <NavLink className="nav-link" href="#" to="/Sentieri">
                  Sentieri
                </NavLink>
              </li>
              <li className="nav-item">
                {/* Chisiamo */}
                <a className="nav-link disabled" aria-disabled="true">
                  Chi siamo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
