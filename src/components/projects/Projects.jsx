import React from "react";
import "./project.css";
import EHR from "../../assets/Screen Recording 2020-08-30 at 2.51.45 PM.mov";
import FinDash from "../../assets/findashVideo.mov";
import HealthFinder from "../../assets/healthFinder.mov";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Projects(props) {
  let index = props.index;
  let movie;

  if (index === 0) {
    movie = EHR;
  } else if (index === 1) {
    movie = FinDash;
  } else if (index === 2) {
    movie = HealthFinder;
  }

  if (index === 0 || index === 2 || index === 4) {
    return (
      <>
        <div
          style={{ backgroundColor: props.color, color: props.fontColor }}
          className="projects-container"
          id={props.index}
        >
          <div className="project">
            <div className="project-description">
              <h1 className="project-title">{props.data.name}</h1>
              <p className="project-text">{props.data.description}</p>
              <h3 className="project-title">Built With</h3>
              <div className="built-with">
                {props.data.icons.map((icon) => {
                  return <i className={`${icon} icon-project`}></i>;
                })}
              </div>
              <div className="project-buttons">
                <a href={props.data.github} className="project-btn">
                  See the code
                </a>
                <a href={props.data.live} className="project-btn">
                  See the Live Site
                </a>
              </div>
            </div>
            <div className="project-video">
              <video
                onMouseOver={(e) => e.target.play()}
                onMouseOut={(e) => e.target.pause()}
              >
                <source src={movie} type="video/mp4" />
              </video>
              <p className="hover-text">Hover Over The Video!</p>
            </div>
          </div>
          <div className="animated4">
            <Link
              to={index === 2 ? "contact" : props.index + 1}
              smooth={true}
              duration={1000}
            >
              <FontAwesomeIcon
                icon={faCaretDown}
                className="caret-icon4"
                size="7x"
              />
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="projects-container-light" id={props.index}>
          <div className="project">
            <div className="project-video">
              <video
                onMouseOver={(e) => e.target.play()}
                onMouseOut={(e) => e.target.pause()}
              >
                <source src={movie} type="video/mp4" />
              </video>
              <p className="hover-text">Hover Over The Video!</p>
            </div>
            <div className="project-description">
              <h1 className="project-title">{props.data.name}</h1>
              <p className="project-text">{props.data.description}</p>
              <h3 className="project-title">Built With</h3>
              <div className="built-with">
                {props.data.icons.map((icon) => {
                  return <i className={`${icon} icon-project`}></i>;
                })}
              </div>
              <div className="project-buttons">
                <a href={props.data.github} className="project-btn-dark">
                  See the code
                </a>
                <a href={props.data.live} className="project-btn-dark">
                  See the Live Site
                </a>
              </div>
            </div>
          </div>
          <div className="newDiv">
            <Link
              to={index === 3 ? "contact" : props.index + 1}
              smooth={true}
              duration={1000}
            >
              <FontAwesomeIcon
                icon={faCaretDown}
                className="caret-icon4-dark"
                size="7x"
              />
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
