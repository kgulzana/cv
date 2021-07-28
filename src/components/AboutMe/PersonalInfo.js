import React from "react";
import { Link } from "react-router-dom";
import aleksand_mayak from "../../profile-images/aleksand-mayak.jpg";

function PersonalInfo() {
  return (
    <div>
      <div className="profile-img">
        <img src={aleksand_mayak} alt="mayak" />
        <p className="pers-info">
          <Link to="/about" className="back-to">
            back to page AboutMe
          </Link>
          <br />
          Hello, <br /> My name is Gulzana. <br /> I am married and I am proud
          mother of 3 handsome sons. <br />I have just got certificate of
          Frontend Developer and maybe <br />I have no experience yet, but there
          is a readiness for difficulties and <br /> a desire to futher
          development.
        </p>
      </div>
    </div>
  );
}

export default PersonalInfo;
