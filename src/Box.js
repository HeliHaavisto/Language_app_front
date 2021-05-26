import React, { useState, useEffect } from "react";
import axios from "axios";

const Box = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/items").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="drag-container">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div className="wip">
              <p className="draggable">{item.name_fi}</p>
            </div>
            <div className="droppable">
              <img className="draggable" src={item.img} alt={item.name_fi} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Box;
