import React from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

        <div className="envelope-div">
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
        </div>
      </div>
    </>
  );
}

export default Nav;
