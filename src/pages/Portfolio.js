import React from "react";
import { workExperience } from "../data";
import halikarnas from "../profile-images/halikarnas.jpg";

function Portfolio() {
  return (
    <div>
      <div className="profile-img">
        <img src={halikarnas} alt="halikarnas"/>
        <ul className="work-exp">
          <h4 className="portfolio-title">Work experience</h4>
          {workExperience.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
