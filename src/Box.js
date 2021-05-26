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
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <strong className="drag ">{item.name_fi}</strong>

            <img className="drop drag " src={item.img} alt={item.name_fi} />
          </div>
        );
      })}
    </div>
  );
};

export default Box;
