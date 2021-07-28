import React from "react";
import { Link } from "react-router-dom";
import myphoto from "../images/myphoto.jpg";
import person from "../images/person.svg";
import profile from "../images/profile.svg";
import contact from "../images/contact.svg";
import home from "../images/home.svg";
import skills from "../images/skills.svg";
import MobileNavigation from "../components/MobileNavigation";

function Sidebar() {
  return (
    <>
      <div className="sidebarBlock">
        <img className="sidebarBlock__myphoto" src={myphoto} alt="logo" />
        <p className="name">Gulzana Katkeldieva</p>

        <ul className="sidebarBlock__menu">
          <li>
            <Link to="/pagedetails">Page details</Link>
          </li>
          <li>
            <Link to="/home">
              <img src={home} alt="icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <img src={person} alt="icon" />
              About me
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <img src={profile} alt="icon" />
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <img src={skills} alt="icon" />
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <img src={contact} alt="icon" />
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <MobileNavigation />
    </>
  );
}

export default Sidebar;
