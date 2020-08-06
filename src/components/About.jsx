import React from "react";
import { Figure } from "react-bootstrap";

const About = () => {
  return (
    <div className="row mt-5">
      <div className="jumbotron">
        <h1 className="about-me">About Me</h1>
        <hr className="my-4" />
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Figure>
                <Figure.Image
                  id="about-me-pic"
                  src="https://github.com/CrystalWatkins/Crystal-Watkins-Portfolio/blob/master/public/Images/about-me.png?raw=true"
                  alt="Crystal Watkins"
                  className="float-left"
                  height={200}
                  width={200}
                />
              </Figure>
            </div>
            <div className="col-sm-9">
              <section>
                <p id="portfolio-text1">
                  My name is Crystal Watkins and I will graduate from the GT
                  full stack flex program in August 2020. Please see all contact
                  information below!
                </p>
                <p>
                  My address is: 3842 Chattahoochee Summit Dr SE, Atlanta, GA
                  30339
                </p>
                <p>My phone number is: 404-276-4570</p>
                <a className="links" href="https://github.com/CrystalWatkins">
                  Github Portfolio
                </a>
                <br></br>
                <a className="links" href="CrystalWatkinsResume.pdf">
                  Resume
                </a>
                <br></br>
                <a
                  className="links"
                  href="https://www.linkedin.com/in/crystalwatkins1/"
                >
                  LinkedIn
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
