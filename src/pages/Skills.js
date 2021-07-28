import React from "react";
import { programmingSkills, softSkills, MSoffice } from "../data";
import tajmahal from "../profile-images/tajmahal.jpg";

function Skills() {
  return (
    <>
      <div className="profile-img">
        <img className="skills-background" src={tajmahal} alt="taj-mahal" />
        <div className="skills">
          <ul className="soft-skills">
            <h4 className="skills-title">Soft skills</h4>
            {softSkills.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
          <ul className="pr-skills">
            <h4 className="skills-title">Programming skills</h4>
            {programmingSkills.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>

          <ul className="comp-skills">
            <h4 className="skills-title">MS office</h4>
            {MSoffice.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
