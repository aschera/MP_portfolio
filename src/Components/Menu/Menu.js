import { Outlet, Link } from "react-router-dom";
import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div role="navigation" className="navigation">

      <nav>

      <header className="heading">
        <h1 className="title">Dr. Miquel Pericas</h1>
        <h2 className="subtitle">Professional Portfolio</h2>
      </header>

        <ul className="main-menu">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/about">About</Link>
          </li>
          <li className="menu-item">
            <Link to="/education">Education and Certifications</Link>
          </li>
          <li className="menu-item">
            <Link to="/publications">Publications</Link>
          </li>
          <li className="menu-item">
            <Link to="/presentations">Presentations</Link>
          </li>
          <li className="menu-item">
            <Link to="/awards">Awards</Link>
          </li>
          <li className="menu-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Nav;