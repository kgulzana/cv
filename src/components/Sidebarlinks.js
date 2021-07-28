import React from "react";
import { Link } from "react-router-dom";
import person from "../images/person.svg";
import profile from "../images/profile.svg";
import contact from "../images/contact.svg";
import home from "../images/home.svg";
import skills from "../images/skills.svg";
import { motion } from "framer-motion";

function Sidebarlinks() {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <ul className="sidebarBlock__menu">
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
      >
        <Link to="/pagedetails">Page details</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
      >
        <Link to="/home">
          <img src={home} alt="icon" />
          Home
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
      >
        <Link to="/about">
          <img src={person} alt="icon" />
          About me
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
      >
        <Link to="/portfolio">
          <img src={profile} alt="icon" />
          Portfolio
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.4 }}
      >
        <Link to="/skills">
          <img src={skills} alt="icon" />
          Skills
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.5 }}
      >
        <Link to="/contact">
          <img src={contact} alt="icon" />
          Contact
        </Link>
      </motion.li>
    </ul>
  );
}

export default Sidebarlinks;
