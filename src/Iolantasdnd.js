import React, { useState } from "react";
import "./iolanta.css";

const Iolantasdnd = () => {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "words",
      items: [
        { id: 1, title: "kissa" },
        { id: 2, title: "koira" },
        { id: 3, title: "sorsa" },
        { id: 4, title: "hevonen" },
        { id: 5, title: "karhu" },
      ],
    },
    {
      id: 2,
      title: "images",
      items: [
        {
          id: 1,
          image: (
            <img
              className="image"
              alt=""
              src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            />
          ),
        },
        {
          id: 2,
          image: (
            <img
              className="image"
              src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt=""
            />
          ),
        },
        {
          id: 3,
          image: (
            <img
              className="image"
              src="https://images.unsplash.com/photo-1459682687441-7761439a709d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1620&q=80"
              alt=""
            />
          ),
        },
        {
          id: 4,
          image: (
            <img
              className="image"
              src="https://images.unsplash.com/photo-1450052590821-8bf91254a353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt=""
            />
          ),
        },
        {
          id: 5,
          image: (
            <img
              className="image"
              src="https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt=""
            />
          ),
        },
      ],
    },
  ]);

  const [currentBoard, setCurrentBoard] = useState(); //to remember the state of the current board
  const [currentItem, setCurrentItem] = useState(); //to remember the state of the current item

  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className === "item") {
      e.target.style.boxShadow = "0 7px 3px gray";
    } //adding shadow to the draggable item
  }

  function dragLeaveHandler(e) {
    e.target.style.boxShadow = "none";
  }

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board); //to save current at the beginning
    setCurrentItem(item); //to save current at the beginning
  }

  function dragEndHandler(e) {
    e.target.style.boxShadow = "none";
  }

  function dropHandler(e, board, item) {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem); //index of the current item that you hold in your hand
    currentBoard.items.splice(currentIndex, 1); //deleting this item from the current board
    const dropIndex = board.items.indexOf(item); // index of a board from which is this item is taken
    board.items.splice(dropIndex + 1, 0, currentItem); // deleting and adding
    console.log(currentItem.id);
    console.log(item.id);

    if (currentItem.id === item.id) {
      return (e.target.style.backgroundColor = "green");
    }
    if (currentItem.id !== item.id) {
      return (e.target.style.backgroundColor = "red");
    }
    /// updating the boards
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id !== currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
    e.target.style.boxShadow = "none";
  }

  function dropCardHadler(e, board) {
    board.items.splice(currentItem.id, 1);
    /// updating the boards
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
    e.target.style.boxShadow = "none";
  }

  return (
    <div className="app">
      {boards.map(
        (
          board //displaying two boards on the screen
        ) => (
          <div
            className="board"
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropCardHadler(e, board)}
          >
            <div className="board__title">{board.title}</div>
            {board.items.map((item) => (
              <div // all functions assigned
                onDragStart={(e) => dragStartHandler(e, board, item)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, board, item)}
                className="todo"
                draggable={true} // drag is on
                className="item"
              >
                {item.title || item.image}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Iolantasdnd;
