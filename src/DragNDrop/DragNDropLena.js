import React, { useState, useRef } from "react";
import "./Drop.css";

const data = [
	{ title: "group 1", items: ["kissa"], pair: "cat-kissa" },
	{ title: "group 2", items: ["cat"], pair: "cat-kissa", image: "./img/cat-solid.svg" },
	{ title: "group 3", items: ["koira"], pair: "dog-koira" },
	{ title: "group 4", items: ["dog"], pair: "dog-koira", image: "./img/dog-solid.svg" },
	{ title: "group 5", items: ["hevonen"], pair: "horse-hevonen" },
	{ title: "group 6", items: ["horse"], pair: "horse-hevonen", image: "./img/horse-solid.svg" },
];

const DragNDropLena = () => {
	const [list, setList] = useState(data);
	const [dragging, setDragging] = useState(false);
	const dragItem = useRef();
	const dragNode = useRef();

	const handleDragStart = (e, params) => {
		console.log("Dragging!", params);
		dragItem.current = params;
		dragNode.current = e.target;
		dragNode.current.addEventListener("dragend", handleDragEnd);
		setTimeout(() => {
			setDragging(true);
		}, 0);
		setDragging(true);
	};

	const removeExtraDivs = () => {
		document.querySelectorAll(".dnd-group").forEach((e) => {
			if (e.innerHTML === "") {
				// e.remove();
				e.style.backgroundColor = "transparent";
			}
		});
	};

	const handleDragEnd = () => {
		removeExtraDivs();
		console.log("ended");
		setDragging(false);
		dragNode.current.removeEventListener("dragend", handleDragEnd);
		dragItem.current = null;
		dragNode.current = null;
	};

	const handleDragEnter = (e, params, group) => {
		console.log("entered dragging", params);
		const currentItem = dragItem.current;
		if (
			e.target !== dragNode.current &&
			(dragNode.current.innerHTML + "-" + e.target.innerHTML === group ||
				e.target.innerHTML + "-" + dragNode.current.innerHTML === group)
		) {
			console.log(
				"Target not the same",
				dragNode.current.innerHTML,
				e.target.innerHTML,
				"pair: ",
				group
			);

			setList((oldList) => {
				let newList = JSON.parse(JSON.stringify(oldList));
				newList[params.grp1].items.splice(
					params.item1,
					0,
					newList[currentItem.grp1].items.splice(currentItem.item1, 1)[0]
				);
				dragItem.current = params;
				return newList;
			});
		}
	};

	return (
		<div>
			<div className="drag-n-drop">
				{list.map((grp, grp1) => {
					return (
						<div
							key={grp.title}
							className="dnd-group"
							onDragEnter={
								dragging && !grp.items.length
									? (e) => {
											handleDragEnd(e, { grp1, item1: 0 });
									  }
									: null
							}
						>
							{grp.items.map((item, item1) => {
								return (
									<div
										draggable={grp.image ? false : true}
										value={grp.pair}
										onDragStart={(e) => {
											handleDragStart(e, { grp1, item1 });
										}}
										onDragEnter={
											dragging
												? (e) => {
														handleDragEnter(e, { grp1, item1 }, grp.pair);
												  }
												: null
										}
										key={item}
										style={{
											backgroundImage: `url(${grp.image})`,

											backgroundRepeat: "no-repeat",
										}}
										className="dnd-item"
									>
										{item}
										{/* {grp.image !== undefined && (
											<img className="card-img" src={grp.image} alt={item} />
										)} */}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DragNDropLena;
