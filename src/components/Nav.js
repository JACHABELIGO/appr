import React from 'react';
import { Link } from 'gatsby';
import logo from '../assets/img/logo.png';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Elements">Services</Link>
              </li>
              <li>
                <Link to="/Company">Company</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              
            </ul>
            <img src={logo} alt="company logo"></img>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
