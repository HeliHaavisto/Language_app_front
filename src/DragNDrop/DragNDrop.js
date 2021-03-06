import React, { useState, useEffect } from "react";

import axios from "axios";

import ModalWindow from "./ModalWindow";

import Spinner from "react-bootstrap/Spinner";

import "./Drag.css";

import randomArrayShuffle from "./shuffle";

const DragNDrop = () => {
	const [data, setData] = useState([]);
	const dataSet1 = data.slice(0, 5);
	const dataSet2 = data.slice(5, 10);
	const dataSet3 = data.slice(10, 15);
	const dataSet4 = data.slice(15, 20);

	const [counter, setCounter] = useState(1);
	const [loading, setLoading] = useState(false);
	// const [correctCounter, setCorrectCounter] = useState(0);

	const [modalShow, setModalShow] = React.useState(false);

	useEffect(() => {
		axios.get("https://warm-beach-10313.herokuapp.com/items/all").then((response) => {
			setData(response.data);
			setLoading(true);
		});
	}, []);

	function dragStart(event) {
		event.dataTransfer.setData("text", event.target.id); // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
	}

	function dragEnter(event) {
		if (!event.target.classList.contains("dropped")) {
			event.target.classList.add("droppable-hover");
		}
	}

	function dragOver(event) {
		if (!event.target.classList.contains("dropped")) {
			event.preventDefault(); // Prevent default to allow drop
		}
	}

	function dragLeave(event) {
		if (!event.target.classList.contains("dropped")) {
			event.target.classList.remove("droppable-hover");
		}
	}
	let correctCounter = 0;
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
			correctCounter = correctCounter + 1;
			if (correctCounter === 5) {
				setModalShow(true);
			}
		}
	}

	function startOver() {
		setCounter(1);
		setModalShow(false);
	}

	function nextLevel() {
		setCounter(counter + 1);
		setModalShow(false);
	}

	return (
		<div className="container">
			{loading === false && <Spinner className="spinner" animation="border" variant="warning" />}
			<h1 className="style-font">Level {counter}</h1>
			<div className="container-for-elements">
				{counter === 1 && (
					<>
						<section className="draggable-elements">
							{randomArrayShuffle(
								dataSet1.map((item) => {
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
								dataSet1.map((item) => {
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
						</section>
					</>
				)}
				{counter === 2 && (
					<>
						<section className="draggable-elements">
							{randomArrayShuffle(
								dataSet2.map((item) => {
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
								dataSet2.map((item) => {
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
						</section>
					</>
				)}
				{counter === 3 && (
					<>
						<section className="draggable-elements">
							{randomArrayShuffle(
								dataSet3.map((item) => {
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
								dataSet3.map((item) => {
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
						</section>
					</>
				)}
				{counter === 4 && (
					<>
						<section className="draggable-elements">
							{randomArrayShuffle(
								dataSet4.map((item) => {
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
								dataSet4.map((item) => {
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
						</section>
					</>
				)}
			</div>
			<div className="buttonsOnBottom">
				<ModalWindow
					counter={counter}
					startover={() => {
						startOver();
					}}
					show={modalShow}
					nextlevel={() => nextLevel()}
					onHide={() => setModalShow(false)}
				/>
			</div>
		</div>
	);
};

export default DragNDrop;
