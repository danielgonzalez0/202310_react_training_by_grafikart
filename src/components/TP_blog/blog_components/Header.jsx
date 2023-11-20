import React, { useState } from 'react';
import { useToggle } from '../../../hooks/useToggle';
import { activeClassIf } from '../blog_utils/classNames';
import { NavLink } from 'react-router-dom';

/**
 *
 * @param {string} page
 * @returns {JSX.Element}
 */
const Header = ({ page }) => {
  const [expanded, toggleExpanded] = useToggle(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MonSite
        </a>
        <button
          onClick={toggleExpanded}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={activeClassIf(page === 'home', 'nav-link')}
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={activeClassIf(page === 'contact', 'nav-link')}
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li>
              <NavLink
                className={activeClassIf(page === 'contact', 'nav-link')}
                to="/"
              >
                back to training
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
