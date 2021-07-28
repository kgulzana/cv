import React from "react";
import "./App.css";
import "./responsive.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import PageDetails from "./pages/PageDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import Education from "./components/AboutMe/Education";
import LifePriorities from "./components/AboutMe/LifePriorities";
import PersonalInfo from "./components/AboutMe/PersonalInfo";

export const FormContext = React.createContext();

function App() {
  return (
    <div className="container wrapper">
      <Router>
        <Sidebar className="sidebar" />

        <main className="content">
          <Switch>
            <Route path="/about" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/home" exact component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
            <Route path="/education" component={Education} />
            <Route path="/lifepriorities" component={LifePriorities} />
            <Route path="/personalinfo" component={PersonalInfo} />
            <Route path="/" component={PageDetails} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
