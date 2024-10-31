import React from 'react';
import { Outlet, Link } from "react-router-dom";

function NavBar()  {
  return (
    <div>
      <nav>
        <ul>
        <li className="NvBar" key="NavBar">
        <Link style={{ color: "white" }} to="/">
        Home
      </Link>
        </li>
        <li>
        <Link style={{ color: "white" }} to="/about">About</Link>
        </li>
        <li>
        <Link style={{ color: "white" }} to="/contact">SearchBar</Link>
      </li>
      </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;