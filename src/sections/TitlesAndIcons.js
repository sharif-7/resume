import React, { Component } from "react";
import Fullpage from "../components/fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import "./TitlesAndIcons.css";


const colors = ["red", "blue", "green", "yellow", "black"];

class TitlesAndIcons extends Component {
  state = {
    color: "black",
    bgcolor: "white",
  };
  changecolor = () => {
    this.setState({
      color: this.state.color === "black" ? "red" : "black",
    });
  };
  changeallcolor = () => {
    this.setState({
      bgcolor: this.state.bgcolor === "white" ? "rgb(0, 136, 255)" : "white",
      color: this.state.color === "white" ? "rgb(0, 136, 255)" : "white",
    });
  };
  render() {
    return (
      <div>
        <button className="button"
          onClick={() => {
            this.changeallcolor();
          }}
        >
          change Color
        </button>
        <Element name="Welcome" className="element"></Element>
        <div style={{ backgroundColor: this.state.bgcolor, }}>
          <Fullpage className="hero">
            <h1
              className="title"
              style={{
                color: this.state.color,
              }}
              onMouseOver={() => {
                this.changecolor();
              }}
              onMouseLeave={() => {
                this.changecolor();
              }}
            >
              {data.title}
            </h1>
            <h2 className="subtitle" style={{
                color: this.state.color,
              }}
              onMouseOver={() => {
                this.changecolor();
              }}
              onMouseLeave={() => {
                this.changecolor();
              }}>{data.subtitle}</h2>
            <br />
            <div className="social">
              {Object.keys(data.links).map((key) => {
                return <SocialIcon id="icons" url={data.links[key]} />;
              })}
            </div>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={50}
              duration={2000}
              onSetActive={this.handleSetActive}
            >
              <div
                onClick={() => console.log("im Here")}
                style={{
                  marginTop: "20%",
                }}
              >
                <img src="../media/down.png"></img>
              </div>{" "}
            </Link>
          </Fullpage>
        </div>
        <Element name="About" className="element"></Element>
      </div>
    );
  }
}

export default TitlesAndIcons;
