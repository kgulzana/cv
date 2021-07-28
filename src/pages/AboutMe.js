import React from "react";
import { Link } from "react-router-dom";
import singapur from "../profile-images/singapur.jpg";

function AboutMe() {
  return (
    <>
      <div className="profile-img">
        <img src={singapur} alt="singapur" />
        <div className="aboutMe">
          <Link to="/home" className="back-to">
            back to home page
          </Link>
          <ul className="aboutMe__info">
            <li>
              {" "}
              <Link to="/education">Education</Link>
            </li>
            <li>
              {" "}
              <Link to="/personalinfo">Personal information</Link>
            </li>
            <li>
              {" "}
              <Link to="/lifepriorities">Life priorities</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
