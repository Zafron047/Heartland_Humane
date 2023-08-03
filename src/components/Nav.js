import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <ul>
    <li>
      <Link to="/">
        <button type="button">
          Back to Home
        </button>
      </Link>
    </li>
  </ul>
);

export default Nav;
