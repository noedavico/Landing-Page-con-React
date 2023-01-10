import React from "react";

//create your first component
const Navbar = () => {
	return ( 
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container">
    <a className="navbar-brand" href="#">
      Start Bootstrap
    </a>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Service
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            tabIndex={-1}
            aria-disabled="true">
            Contact
          </a>
        </li>
      </ul>
    </div>
</div>
</nav>
);
};

export default Navbar;
