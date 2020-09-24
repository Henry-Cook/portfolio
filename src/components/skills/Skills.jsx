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
        <div className="skills-grid-container">
          <div className="icon-container">
            <div>
              <i className="devicon-javascript-plain colored skills-icon"></i>
              <p className="icon-text">JavaScript</p>
            </div>
            <div>
              <i className="devicon-html5-plain colored skills-icon"></i>
              <p className="icon-text">HTML</p>
            </div>
            <div>
              <i className="devicon-css3-plain colored skills-icon"></i>
              <p className="icon-text">CSS</p>
            </div>
            <div>
              <i className="devicon-react-original colored skills-icon"></i>
              <p className="icon-text">React</p>
            </div>
            <div>
              <i className="devicon-nodejs-plain colored skills-icon"></i>
              <p className="icon-text">NodeJS</p>
            </div>
            <div>
              <i className="devicon-express-original colored skills-icon"></i>
              <p className="icon-text">Express</p>
            </div>
            <div>
              <i className="devicon-mongodb-plain colored skills-icon"></i>
              <p className="icon-text">MongoDB</p>
            </div>
            <div>
              <i className="devicon-postgresql-plain colored skills-icon"></i>
              <p className="icon-text">PostgreSQL</p>
            </div>
            <div>
              <i className="devicon-ruby-plain colored skills-icon"></i>
              <p className="icon-text">Ruby</p>
            </div>
            <div>
              <i className="devicon-rails-plain colored skills-icon"></i>
              <p className="icon-text">Rails</p>
            </div>
            <div>
              <i className="devicon-bootstrap-plain colored skills-icon"></i>
              <p className="icon-text">Bootstrap</p>
            </div>
            <div>
              <i className="devicon-git-plain colored skills-icon"></i>
              <p className="icon-text">Git</p>
            </div>
          </div>
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
