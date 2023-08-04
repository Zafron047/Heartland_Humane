import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Detail.css';

const Nav = () => (
  <nav className="nav">
    <Link to="/">
      <button type="button">
        Back to Home
      </button>
    </Link>
  </nav>
);

export default Nav;
