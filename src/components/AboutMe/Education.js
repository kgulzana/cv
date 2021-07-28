import React from "react";
import { education } from "../../data";
import { Link } from "react-router-dom";
import waterfall from "../../profile-images/waterfall.jpg";

function Education() {
  return (
    <div>
      <div className="profile-img">
        <img src={waterfall} alt="niagara" />
        <ul className="pers-info">
          <Link to="/about" className="back-to">
            back to page AboutMe
          </Link>
          <h3 className="title">Education</h3>
          {education.map((item) => {
            return <li className="education-list">{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Education;
