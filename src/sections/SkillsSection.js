import React, { Component } from "react";
import Fullpage from "../components/fullpage";
import data from "../data.json";
import SkillsCard from "../components/SkillsCard";
import {Element,animateScroll as scroll,} from "react-scroll";

class SkillsSection extends Component {
  render() {
    return (
      <div>
      <Fullpage>
        <h2>{data.sections[1].title}</h2>
        <br />
        <div class="flex-container">
          {data.sections[1].items.map((eachSkill) => {
            return (
              <SkillsCard Skills={eachSkill} />
            );
          })}
        </div>
      </Fullpage>
      
    </div>
    );
  }
}

export default SkillsSection;
