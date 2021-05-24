import React from "react";
import Logo from "./language_app_logo.png";
import { Link, Switch } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="style-font">Welcome to</h1>
      <img src={Logo} alt="logo" className="logo" />
      <p>
        Language <br /> Learning <br /> App
      </p>

      <Switch>
        <Link to="/menu">Start Learning</Link>
      </Switch>
      <Switch>
        <Link to="/about">About</Link>
      </Switch>
    </div>
  );
};

export default Home;
