import React from "react";
import Box from "./Box";
import { Link } from "react-router-dom";

const Dragndrop = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "montserrat",
          padding: "2rem",
        }}
      >
        LET'S GO!
      </h1>
      <Box />
      <Link to="/">Home</Link>
    </div>
  );
};

export default Dragndrop;
