import React from 'react'
import { Outlet, Link } from "react-router-dom";
import logo from '../internal-images/logo_spatial.png'

const Navbar = () => {

    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
              <img src={logo} alt="Log Main"/>
            </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item font-16">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item font-16">
                <Link className="nav-link" to="/about">About the Product</Link>
              </li>
              <li className="nav-item font-16">
                <Link className="nav-link" to="/features">Features</Link>
              </li>
              <li className="nav-item font-16">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
        </div>
    )

}

export default Navbar;