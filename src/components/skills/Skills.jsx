import React from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Skills() {
  return (
    <>
      <div className="skills-container" id="skills">
        <h1 className="skills-title">Skills</h1>
        <div className="icon-container">
          <i className="devicon-javascript-plain colored skills-icon"></i>
          <i class="devicon-html5-plain colored skills-icon"></i>
          <i class="devicon-css3-plain colored skills-icon"></i>
          <i class="devicon-react-original colored skills-icon"></i>
          <i class="devicon-nodejs-plain colored skills-icon"></i>
          <i class="devicon-express-original colored skills-icon"></i>
          <i class="devicon-mongodb-plain colored skills-icon"></i>
          <i class="devicon-postgresql-plain colored skills-icon"></i>
          <i class="devicon-ruby-plain colored skills-icon"></i>
          <i class="devicon-rails-plain colored skills-icon"></i>
          <i class="devicon-bootstrap-plain colored skills-icon"></i>
          <i class="devicon-git-plain colored skills-icon"></i>
        </div>
        <div className="animated3">
          <Link to={0} smooth={true} duration={1000}>
            <FontAwesomeIcon
              icon={faCaretDown}
              className="caret-icon3"
              size="7x"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Skills;
