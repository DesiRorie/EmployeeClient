import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>E-Tracker</h1>
      <ul className="navUl">
        <li>
          <Link to="/home">
            <HomeIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
