import React, { Component } from "react";
import "./SkillsCard.css";

class SkillsCard extends Component {
  render() {
    const { Skills } = this.props;
    return (
      <div class="flex-item">
        <h4>{Skills.content.title}</h4>
        <img id="cardimage" src={Skills.content.image}></img>
      </div>
    );
  }
}

export default SkillsCard;
