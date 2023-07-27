import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/me.jpg";
const Navbar = () => {
  return (
    <nav>
      {/* <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div> */}
      <div className="nav-links">
        <ul>
          <li>
            <Link to="head" spy={true} smooth={true} offset={0} duration={200}>
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
            >
              Services
            </Link>
            {/* <a href="#services">Services</a> */}
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={200}
            >
              Skills
            </Link>
            {/* <a href="#skills">Skills</a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
