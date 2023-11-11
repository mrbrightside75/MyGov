import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to="dashboard" className="navbar-brand">
          <span className="material-symbols-outlined">account_balance</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/dashboard" className="btn btn-outline-primary">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mygovernment" className="btn btn-outline-primary">
                My Government
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/myrep" className="btn btn-outline-primary">
                My Representatives
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/myballot" className="btn btn-outline-primary">
                Voter Info Center
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
