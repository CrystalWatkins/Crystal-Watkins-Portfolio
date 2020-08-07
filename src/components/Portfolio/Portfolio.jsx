import React from "react";
import { Figure } from "react-bootstrap";
import "./Portfolio.css";

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
              <figcaption>Done n Dusted</figcaption>
            </Figure>
            <a href="github.com">Done n Dusted</a>
          </div>
          <div className="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/aboutme1.png?raw=true"
                alt="Profile Page"
                rounded
                fluid
              />
              <figcaption>Profile Page</figcaption>
            </Figure>
            <a href="github.com">Profile Page</a>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/EmployeeMngmt.png?raw=true"
              rounded
                alt="Employee Management"
                fluid
              />
              <figcaption>Employee Management</figcaption>
            </Figure>
            <a href="github.com">Employee Management</a>
          </div>
          <div className="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/notetaker.png?raw=true"
                rounded
                alt="Note Taker"
                fluid
              />
              <figcaption>Note Taker</figcaption>
            </Figure>
            <a href="https://github.com/CrystalWatkins/gt-hw-node-express-note-taker">
              Note Taker
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/readme.png?raw=true"
                rounded
                alt="Read Me Generator"
                fluid
              />
              <figcaption>Read Me Generator</figcaption>
            </Figure>
            <a href="https://github.com/CrystalWatkins/gt-hw-readme-generator">
              Read Me Generator
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
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/Project1.png?raw=true"
                rounded
                alt="Project One"
                fluid
              />
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
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/weather.png?raw=true"
                rounded
                alt="Third Party Weather App"
              />
              <figcaption>Third Party Weather API Webpage</figcaption>
            </Figure>
            <a href="https://crystalwatkins.github.io/gt-hw-server-side-api-weather-dashboard/">
              Weather Dashboard
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/workDay.png?raw=true"
                rounded
                alt="Work Day Scheduler"
                fluid
              />
              <figcaption>Work Day Scheduler</figcaption>
            </Figure>
            <a href="https://crystalwatkins.github.io/gt-hw-thirdpartyapi-work-day-scheduler/">
              Work Day Scheduler
            </a>
          </div>
          <div className="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/codingQuiz.png?raw=true"
                rounded
                alt="Web Api Quiz Page"
                fluid
              />
              <figcaption>Web Api Quiz Page</figcaption>
            </Figure>
            <a href="https://crystalwatkins.github.io/gt-hw-web-apis-quiz/">
              Web Api Quiz
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/passwordGenerator.png?raw=true"
                rounded
                alt="Password Generator"
                fluid
              />
              <figcaption>Password Generator</figcaption>
              <a href="https://crystalwatkins.github.io/gt-hw-js-password-generator/">
                Password Generator
              </a>
            </Figure>
          </div>
          <div className="col-sm-6">
            <Figure>
              <Figure.Image
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/semantics.png?raw=true"
                rounded
                alt="Semantic Tags"
                fluid
              />
              <figcaption>Using Semantic Tags in HTML</figcaption>
              <a href="https://crystalwatkins.github.io/gt-semantic-html-homework-01/">
                Semantics in HTML
              </a>
            </Figure>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Portfolio;