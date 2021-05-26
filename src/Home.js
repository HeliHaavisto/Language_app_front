import React from "react";
import Logo from "./language_app_logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1 className="style-font">Welcome to</h1>
      <img src={Logo} alt="logo" className="logo" />
      <p className="p-main-page">
        Language <br /> Learning <br /> App
      </p>

      <Link to="/menu">Start Learning</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
