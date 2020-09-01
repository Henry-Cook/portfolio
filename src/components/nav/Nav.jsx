import React from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faMedium,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-links">
          <Link
            className="link-hover"
            to="heading"
            smooth={true}
            duration={1500}
          >
            <h1>HC</h1>
          </Link>
        </div>

        <div className="social-links">
          <Link
            className="link-hover"
            to="contact"
            smooth={true}
            duration={2000}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="iconsEnvelope"
              size="2x"
            />
          </Link>
          <a href="https://www.linkedin.com/in/henry-cook-dev/">
            <FontAwesomeIcon icon={faLinkedin} className="icons" size="2x" />
          </a>
          <a href="https://github.com/Henry-Cook">
            <FontAwesomeIcon icon={faGithub} className="icons" size="2x" />
          </a>
          <a href="https://medium.com/@henryfcook3">
            <FontAwesomeIcon icon={faMedium} className="icons" size="2x" />
          </a>
          <a href="https://dev.to/henrycook">
            <FontAwesomeIcon icon={faDev} className="icons" size="2x" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;
