import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container">
      <Link to="/alphabet">
        <h1 className="style-font">Alphabet</h1>
      </Link>
      <p>OR</p>
      <Link to="/gamelanding">
        <h1 className="style-font">Drag'n'Drop</h1>
      </Link>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Menu;
