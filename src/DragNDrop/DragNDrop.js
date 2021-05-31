import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Drag.css";

const DragNDrop = () => {
	const [data, setData] = useState([]);

	function randomArrayShuffle(array) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}

	useEffect(() => {
		axios.get("http://localhost:3001/items").then((response) => {
			setData(response.data);
		});
	}, []);

	function dragStart(event) {
		event.dataTransfer.setData("text", event.target.id); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
		console.log("START DRAGGING!");
	}

	function dragEnter(event) {
		if (!event.target.classList.contains("dropped")) {
			event.target.classList.add("droppable-hover");
		}
		console.log("ENTERED DRAGGING");
	}

	function dragOver(event) {
		if (!event.target.classList.contains("dropped")) {
			event.preventDefault(); // Prevent default to allow drop
		}
		console.log("DRAG OVER!");
	}

	function dragLeave(event) {
		if (!event.target.classList.contains("dropped")) {
			event.target.classList.remove("droppable-hover");
		}
		console.log("LEAVE DRAGGING!");
	}

	function drop(event) {
		event.preventDefault(); // This is in order to prevent the browser default handling of the data
		event.target.classList.remove("droppable-hover");
		const draggableElementData = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
		const droppableElementData = event.target.getAttribute("data-draggable-id");
		const droppableFinnishName = event.target.getAttribute("finnish_name");
		const isCorrectMatching = draggableElementData === droppableElementData;
		if (isCorrectMatching) {
			const draggableElement = document.getElementById(draggableElementData);
			event.target.classList.add("dropped");
			draggableElement.classList.add("dragged");
			draggableElement.setAttribute("draggable", "false");
			event.target.innerHTML = `<img src="./img/${draggableElementData}.jpg"/><span>${droppableFinnishName}</span>`;
		}
	}

	function startOver() {
		console.log("START!");
		window.location.reload(true);
	}

	return (
		<div className="container-for-elements">
			<section className="draggable-elements">
				{randomArrayShuffle(
					data.map((item) => {
						return (
							<img
								alt={item.name_en}
								src={item.img}
								className="draggable"
								key={item.name_en}
								draggable
								id={item.name_en}
								onDragStart={(e) => {
									dragStart(e);
								}}
							/>
						);
					})
				)}
			</section>
			<section className="droppable-elements">
				{randomArrayShuffle(
					data.map((item) => {
						return (
							<div
								finnish_name={item.name_fi}
								key={item.name_en}
								className="droppable"
								data-draggable-id={item.name_en}
								onDragEnter={(e) => {
									dragEnter(e);
								}}
								onDragOver={(e) => {
									dragOver(e);
								}}
								onDragLeave={(e) => {
									dragLeave(e);
								}}
								onDrop={(e) => {
									drop(e);
								}}
							>
								<span>{item.name_fi}</span>
							</div>
						);
					})
				)}
				<button className="start-over" onClick={startOver}>
					Start Over
				</button>
			</section>
		</div>
	);
};

export default DragNDrop;
