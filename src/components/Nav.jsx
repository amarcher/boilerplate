import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

function Nav() {
  return (
    <div className="nav">
      <nav className="nav__content">
        <ul className="nav__list">
          <li className="nav__list-item">
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink to="/other">Something Else</NavLink>
          </li>
        </ul>
      </nav>
      <div className="nav__spacer" />
    </div>
  );
}

export default Nav;
