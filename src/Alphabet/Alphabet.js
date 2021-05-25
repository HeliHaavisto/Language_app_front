import React, { Component } from "react";
import { abc } from "./abc";
import Letter from "./Letter";

class Alphabet extends Component {
  state = {
    abc: abc,
  };

  clickHandler = (abc_name) => {
    alert("You pressed letter " + abc_name);
  };

  render() {
    return (
      <div className="abc-container">
        {this.state.abc.map((letter) => {
          return (
            <Letter
              key={letter.name}
              name={letter.name}
              play_sound={this.clickHandler.bind(this, letter.name)}
            />
          );
        })}
      </div>
    );
  }
}

export default Alphabet;
