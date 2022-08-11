import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo/Logo1.png";
import "./navbar.css";
import { links } from "../data";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="navlogo" />
        </Link>
        <ul className="nav__links">
          {links.map(({ name, path }, index) => {
            return (
              <li>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav__toggle-btn">
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
