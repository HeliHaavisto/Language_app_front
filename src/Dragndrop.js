import React from "react";
import { Link } from "react-router-dom";
import DragNDrop from "./DragNDrop/DragNDrop";

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
      <DragNDrop />
      <Link to="/">Home</Link>
    </div>
  );
};

export default Dragndrop;
