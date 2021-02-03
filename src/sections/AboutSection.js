import React, { Component } from "react";
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


class AboutSection extends Component {
  render() {
    return (
      <div>
      <Fullpage className="about">
      <h2>{data.sections[0].title}</h2>
      <p>{data.sections[0].items[0].content}</p>
    </Fullpage>
    <Element name="Skills" className="element"></Element>
    </div>
        );
  }
}

export default AboutSection;
