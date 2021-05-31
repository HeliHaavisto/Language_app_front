import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const Box = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    axios.get("http://localhost:3001/items").then((response) => {
      setData(response.data);
    });
  }, []);

  const onDragStartHandler = (e, dragId) => {
    //console.log(dragId);
    e.dataTransfer.setData("id", dragId);
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
  };

  const onDropHandler = (e, dropId) => {
    e.preventDefault();

    let dragId = e.dataTransfer.getData("id");

    //console.log(dragId);
    //console.log(dropId);

    if (dragId === dropId) {
      e.target.style.backgroundColor = "green";
    } else {
      e.target.style.backgroundColor = "red";
    }
  };

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };

  return (
    <div>
      {currentPosts.map((item) => {
        return (
          <div key={item.id}>
            <img
              className="draggable "
              src={item.img}
              alt={item.name_fi}
              draggable
              onDragStart={(e) => onDragStartHandler(e, item.id)}
            />
            <strong
              onDragOver={(e) => onDragOverHandler(e)}
              onDrop={(e) => onDropHandler(e, item.id)}
              className=" droppable"
            >
              {item.name_fi}
            </strong>
          </div>
        );
      })}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Box;
