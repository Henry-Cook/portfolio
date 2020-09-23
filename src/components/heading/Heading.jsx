import React from "react";
import "./heading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Heading() {
  return (
    <>
      <div className="heading-container" id="heading">
        <div className="text-container">
          <h1 className="heading">Henry Cook</h1>
          <h3 className="sub-heading">Full Stack Developer</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/henry-cook-dev/">
              <FontAwesomeIcon icon={faLinkedin} className="icons" size="2x" />
            </a>
            <a href="https://github.com/Henry-Cook">
              <FontAwesomeIcon icon={faGithub} className="icons" size="2x" />
            </a>
          </div>
        </div>
        <div className="animated">
          <Link to="about" smooth={true} duration={1000} className="link-hover">
            <FontAwesomeIcon
              icon={faCaretDown}
              className="caret-icon"
              size="7x"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Heading;
