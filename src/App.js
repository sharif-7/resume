import React, { Component } from "react";
import ReactDOM from "react";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import Nav from "./sections/Nav";
import "./App.css";




// const colors = ['red', 'blue', 'green', 'yellow', 'black'];

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       boxColor: 'red'
//     };
//   }
  
//   getRandomColor() {
//     const diffColors = colors.filter(color => color !== this.state.boxColor);
//     const randomColorIndex = Math.floor(Math.random() * diffColors.length);
//     return diffColors[randomColorIndex];
//   }
  
//   handleClick() {
//     this.setState(({ boxColor }) => ({
//       boxColor:  this.getRandomColor()
//     }));
//   }
  
//   render() {
//     return (
//       <div>
//         <div className="box" style={{ backgroundColor: this.state.boxColor }} />
//         <button onClick={() => this.handleClick()}>Click for random color</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));


// export default App;


class App extends Component {
  
  render() {
    return (
      <div>
        <Nav />

        <TitlesAndIcons />

        <AboutSection />

        <SkillsSection />
        
      </div>
    );
  }
}

export default App;
