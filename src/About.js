import React from "react";
import { Link } from "react-router-dom";
import Logo from "./language_app_logo.png";

const About = () => {
  return (
    <div className="container">
      <h1 className="style-font">About</h1>
      <img src={Logo} alt="logo" className="logo" />
      <p>
        This is our team project made by 4 awesome students : Aryal Sagar,
        Ivankina Elena, Haavisto Heli and Iolanta Ubozhenko.
      </p>
      <p>Frond end is made with React Js.</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default About;
