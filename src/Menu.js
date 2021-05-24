import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link to="/alphabet"><h1>Alphabet</h1></Link>
      <Link to="/gamelanding"><h1>Drag'n'Drop</h1></Link>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Menu;
