import { Outlet, Link } from "react-router-dom";
import React from "react";
import MobileMenu from './MobileMenu';
import "./Nav.css";

const useToggle = (initialState) => {
  const [isToggled, setIsToggled] = React.useState(initialState);

  const toggle = React.useCallback(
    () => setIsToggled(state => !state),
    [setIsToggled],
  );

  console.log(isToggled)

  return [isToggled, toggle];
}

const Nav = () => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div role="navigation" className="navigation">
    <nav>
      <header className="main-menu-heading">
        <h1 className="title">Dr. Miquel Pericas</h1>
        <h2 className="subtitle">Professional Portfolio</h2>
      </header>

      <MobileMenu toggle={isToggled} onClick={toggle} />

      <ul className="main-menu">
        <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/About">About</Link>
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
          <Link to="/Linkwards">Awards</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </div>
  );
}

export default Nav;