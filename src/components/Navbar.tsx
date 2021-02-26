import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-2 px1">
        <a href="/" className="brand-logo">
          Займись делами
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Список дел</NavLink>
          </li>
          <li>
            <NavLink to="/about">Информация</NavLink>to
          </li>
        </ul>
      </div>
    </nav>
  );
};
