import React from "react";
import { Figure } from "react-bootstrap";
import "./Portfolio.css";
import Fade from "./Fade";

const Portfolio = () => {
  return (
    <div className="row mt-5">
      <div className="jumbotron">
        <h1 className="portfolio">Portfolio</h1>
        <hr className="my-4" />

        <div className="row">
          <div className="col-sm-6">
            <Figure>
              <Figure.Image
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/DonenDusted.png?raw=true"
                alt="Done n Dusted"
                rounded
                fluid
              />
              <Fade/>
              <figcaption>Done n Dusted</figcaption>
            </Figure>
            <a href="github.com">Done n Dusted</a>
          </div>
          <div className="col-sm-6">
            <Figure>
              <Figure.Image
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/EmployeeMngmt.png?raw=true"
                rounded
                alt="Employee Management"
                fluid
              />
                          <Fade/>
              <figcaption>Employee Management</figcaption>
            </Figure>
            <a href="github.com">Employee Management</a>
          </div>
        </div>

        <div className="row">
        <div className="col-sm-6">
            <Figure>
              <Figure.Image
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/Project1.png?raw=true"
                rounded
                alt="Project One"
                fluid
              />
                          <Fade/>
              <figcaption>Project One- Destination Staycation</figcaption>
              
            </Figure>
            <a href="https://crystalwatkins.github.io/gt-project-1/.">
              Project One
            </a>
          </div>
          <div className="col-sm-6">
            <Figure>
              <Figure.Image
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/mysqlemployee.png?raw=true"
                rounded
                alt="Employee Tracker"
                fluid
              />
                          <Fade/>
              <figcaption>Employee Tracker</figcaption>
            </Figure>
            <a href="https://github.com/CrystalWatkins/gt-hw-my-sql-employee-tracker">
              Employee Tracker
            </a>
          </div>
        </div>


        <div className="row">
          <div className="col-sm-6">
            <Figure>
              <Figure.Image
                className="portfolio-pic"
                src="#"
                rounded
                alt="Burger App"
              />
              <figcaption>Burger App</figcaption>
              <Fade/>
            </Figure>
            <a href="https://evening-ravine-28370.herokuapp.com/">
              Heroku
            </a>
            <a href= "https://github.com/CrystalWatkins/gt-hw-mvc-burger-app"> Github</a>
          </div>
          <div className="col-sm-6">
            <Figure>
              <Figure.Image
                className="portfolio-pic"
                src="#"
                rounded
                alt="React User Directory"
              />
                          <Fade/>
              <figcaption>React user directory</figcaption>
            </Figure>
            <a href="https://crystalwatkins.github.io/gt-hw-react-user-directory-app/">
             Deployed Site
            </a>
            <a href= "https://github.com/CrystalWatkins/gt-hw-react-user-directory-app"> Github</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
