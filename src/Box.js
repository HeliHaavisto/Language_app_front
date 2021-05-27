import React, { useState, useEffect } from "react";
import axios from "axios";

const Box = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/items").then((response) => {
      setData(response.data);
    });
  }, []);

  const onDragStartHandler = (e, dragId) => {
    //console.log("dragstart", dragId);
    e.dataTransfer.setData("id", dragId);
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
  };

  const onDropHandler = (e, dropId) => {
    let dragId = e.dataTransfer.getData("id");
    console.log(dragId);
    console.log(dropId);
    if (dragId === dropId) {
      e.target.splice();
    } else {
      return;
    }
  };

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <img
              onDragStart={(e) => {
                return onDragStartHandler(e, item.id);
              }}
              draggable
              className="drag "
              src={item.img}
              alt={item.name_fi}
            />
            <strong
              onDragOver={(e) => {
                return onDragOverHandler(e);
              }}
              onDrop={(e) => {
                return onDropHandler(e, item.id);
              }}
              className=" drop"
            >
              {item.name_fi}
            </strong>
          </div>
        );
      })}
    </div>
  );
};

export default Box;
