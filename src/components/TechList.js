import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node", "Java", "C++"]
  };

  render() {
    console.log(this.state);
    return (
      <ul>
        <li>Node</li>
        <li>React</li>
        <li>Java</li>
      </ul>
    );
  }
}

export default TechList;
