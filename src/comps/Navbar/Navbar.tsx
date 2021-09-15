import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "../../icons/menu.svg";
import Close from "../../icons/close.svg";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [className, setClassName] = useState<string>("navmain");
  const respochanger = () => {
    if (className === "navmain") {
      setClassName("navmain respo");
    }
    if (className === "navmain respo") {
      setClassName("navmain");
    }
  };

  return (
    <div className={className}>
      <img
        src={Menu}
        alt="Responsive Nav menu button"
        className="menu"
        onClick={() => respochanger()}
      />

      <nav>
        <div className="logo-div">
          <NavHashLink to="/#home" onClick={() => respochanger()}>
            <motion.img
              initial={{ scale: 0, rotate: -360 }}
              animate={{ rotate: 0, scale: 1 }}
              whileHover={{ rotate: [30, 0, -30, 0], scale: [1.1, 1, 1.1, 1] }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              src="/logo.png"
              alt="Logo"
              className="logo"
            />
          </NavHashLink>
          <img
            src={Close}
            alt="Responsive Nav menu button"
            className="close"
            onClick={() => respochanger()}
          />
        </div>
        <div className="navbar">
          <li>
            <NavHashLink to="/#home" onClick={() => respochanger()}>
              Home
            </NavHashLink>
          </li>

          <li>
            <NavHashLink to="/#about" onClick={() => respochanger()}>
              About
            </NavHashLink>
          </li>
          <li>
            <Link to="/projects" onClick={() => respochanger()}>
              Projects
            </Link>
          </li>
          <li>
            <NavHashLink to="/#skills" onClick={() => respochanger()}>
              Skills
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#contact" onClick={() => respochanger()}>
              Contact
            </NavHashLink>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
