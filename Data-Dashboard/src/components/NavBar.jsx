import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { Outlet, Link } from "react-router-dom";
>>>>>>> 4160bd7ff80c6cc06f830f20a14200d8a81700d5

function NavBar()  {
  return (
<<<<<<< HEAD
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
=======
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
>>>>>>> 4160bd7ff80c6cc06f830f20a14200d8a81700d5
      </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;