import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function About() {
  return (
    <>
      <div className="about-container" id="about">
        <h1 className="about-title">About</h1>
        <p className="about-text">
          I am a Software Developer that is driven to find solutions and create
          impactful products. Results-oriented, I am driven by growth and
          inspired by my teams. Leveraging experience across a variety of
          organizations, I've developed effective communication strategies,
          which also makes me an effective developer on a team. I look forward
          to my next challenge and hope to use technology to make a difference.
        </p>
        <div className="animated2">
          <Link to="skills" smooth={true} duration={1000}>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="caret-icon2"
              size="7x"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
