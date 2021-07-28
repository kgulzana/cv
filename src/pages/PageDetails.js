import React from "react";
import operahouse from "../../src/profile-images/operahouse.jpg";

function PageDetails() {
  return (
    <div className="home-page">
      <div className="profile-img">
        <img src={operahouse} alt="operahouse"></img>
        <main className="project-description">
          The project is written in the React library. <br />
          Used: <br />
          <ul>
            <li>SCSS syntax</li>
            <li>Reactstrap</li>
            <li>Bootstrap</li>
            <li>React-icons</li>
            <li>Framer-motion</li>
            <li>React-router-dom</li>
          </ul>
          <br />
          <p className="deploy">The project is deployed on Github Pages</p>
        </main>
      </div>
    </div>
  );
}

export default PageDetails;
