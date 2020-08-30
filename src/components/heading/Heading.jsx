import React from "react";
import "./heading.css";
import Arrow from "../../assets/down-arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Heading() {
  return (
    <>
      <div className="heading-container" id="heading">
        <div className="text-container">
          <h1 className="heading">Henry Cook</h1>
          <h3 className="sub-heading">Full Stack Developer</h3>
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
