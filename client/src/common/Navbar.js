import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow py-3">
      <div className="container-fluid px-4">

        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src="https://png.pngtree.com/png-vector/20250307/ourmid/pngtree-search-icon-png-image_15738214.png" alt="Logo" width="35" height="35" className="d-inline-block align-text-top me-2"/>
          <span className="fw-bold fs-4">Lost & Found Portal</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 px-4">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/report">Report Item</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/find">Find Item</NavLink>
            </li>
          </ul>

          <a href='https://github.com/dnxsh' className="btn btn-outline-light" type="submit">Contact Dev</a>
          

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
