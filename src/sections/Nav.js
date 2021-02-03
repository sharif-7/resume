import React, { Component } from "react";
import "./nav.css";
import Fullpage from "../components/fullpage";
import data from "../data.json";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="flex-container2">
          <h3 className="flex-item2">
            <Link
              activeClass="active"
              to="Welcome"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              onSetActive={this.handleSetActive}
            >
              <div>
                <a href="#">Welcome</a>
              </div>{" "}
            </Link>
          </h3>
          <h3 className="flex-item2">
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              onSetActive={this.handleSetActive}
            >
              <div>
                <a href="#">About</a>
              </div>{" "}
            </Link>
          </h3>
          <h3 className="flex-item2">
            <Link
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              onSetActive={this.handleSetActive}
            >
              <div>
                <a href="#">Skills</a>
              </div>{" "}
            </Link>
          </h3>
        </div>
        <h3 className="flex-item3">
          <a href="#">Change</a>
        </h3>
      </div>
    );
  }
}

export default Nav;
