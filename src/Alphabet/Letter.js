import React from "react";

const Letter = (props) => {
  return (
    <button className="abc-letter" onClick={props.play_sound}>
      {props.name}
    </button>
  );
};

export default Letter;
