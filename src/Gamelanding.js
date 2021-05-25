import React from "react";
import { Link } from "react-router-dom";

const Gamelanding = () => {
  return (
    <div>
      <h2>Let's play</h2>
      <h1 className="style-font">Drag'n'Drop</h1>
      <h3>CHOOSE AND MATCH CORRECT TRANSLATIONS BY DRAGGING AND DROPPING</h3>
      <Link to="/dragndrop">PLAY</Link>
      <br></br>
      <Link to="/">HOME</Link>
    </div>
  );
};

export default Gamelanding;
