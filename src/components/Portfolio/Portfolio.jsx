import React from "react";
import { Figure } from "react-bootstrap";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div class="row mt-5">
      <div class="jumbotron">
        <h1 class="portfolio">Portfolio</h1>
        <hr class="my-4" />

        <div class="row">
          <div class="col-sm-6">
            <Figure>
              <Figure.Image
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/DonenDusted.png?raw=true"
                class="rounded float-left"
                alt="Done n Dusted"
              />
              <figcaption>Done n Dusted</figcaption>
            </Figure>
            <a href="github.com">Done n Dusted</a>
          </div>
          <div class="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/aboutme1.png?raw=true"
                class="rounded float-right"
                alt="Profile Page"
              />
              <figcaption>Profile Page</figcaption>
            </Figure>
            <a href="github.com">Profile Page</a>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/EmployeeMngmt.png?raw=true"
                class="rounded float-left"
                alt="Employee Management"
              />
              <figcaption>Employee Management</figcaption>
            </Figure>
            <a href="github.com">Employee Management</a>
          </div>
          <div class="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/notetaker.png?raw=true"
                class="rounded float-right"
                alt="Note Taker"
              />
              <figcaption>Note Taker</figcaption>
            </Figure>
            <a href="https://github.com/CrystalWatkins/gt-hw-node-express-note-taker">
              Note Taker
            </a>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/readme.png?raw=true"
                class="rounded float-left"
                alt="Read Me Generator"
              />
              <figcaption>Read Me Generator</figcaption>
            </Figure>
            <a href="https://github.com/CrystalWatkins/gt-hw-readme-generator">
              Read Me Generator
            </a>
          </div>
          <div class="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/mysqlemployee.png?raw=true"
                class="rounded float-right"
                alt="Employee Tracker"
              />
              <figcaption>Employee Tracker</figcaption>
            </Figure>
            <a href="https://github.com/CrystalWatkins/gt-hw-my-sql-employee-tracker">
              Employee Tracker
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/Project1.png?raw=true"
                class="rounded float-left"
                alt="Project One"
              />
              <figcaption>Project One- Destination Staycation</figcaption>
            </Figure>
            <a href="https://crystalwatkins.github.io/gt-project-1/.">
              Project One
            </a>
          </div>
          <div class="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/weather.png?raw=true"
                class="rounded float-right"
                alt="Third Party Weather App"
              />
              <figcaption>Third Party Weather API Webpage</figcaption>
            </Figure>
            <a href="https://crystalwatkins.github.io/gt-hw-server-side-api-weather-dashboard/">
              Weather Dashboard
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/workDay.png?raw=true"
                class="rounded float-left"
                alt="Work Day Scheduler"
              />
              <figcaption>Work Day Scheduler</figcaption>
            </Figure>
            <a href="https://crystalwatkins.github.io/gt-hw-thirdpartyapi-work-day-scheduler/">
              Work Day Scheduler
            </a>
          </div>
          <div class="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/codingQuiz.png?raw=true"
                class="rounded float-right"
                alt="Web Api Quiz Page"
              />
              <figcaption>Web Api Quiz Page</figcaption>
            </Figure>
            <a href="https://crystalwatkins.github.io/gt-hw-web-apis-quiz/">
              Web Api Quiz
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <Figure>
              <Figure.Image
                 className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/passwordGenerator.png?raw=true"
                class="rounded float-left"
                alt="Password Generator"
              />
              <figcaption>Password Generator</figcaption>
              <a href="https://crystalwatkins.github.io/gt-hw-js-password-generator/">
                Password Generator
              </a>
            </Figure>
          </div>
          <div class="col-sm-6">
            <Figure>
              <Figure.Image
                className="portfolio-pic"
                src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/semantics.png?raw=true"
                class="rounded float-right"
                alt="Semantic Tags"
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