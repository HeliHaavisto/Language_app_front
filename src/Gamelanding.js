import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Gamelanding = () => {
	return (
		<div className="container">
			<h2>Let's play</h2>
			<h1 className="style-font">Drag'n'Drop</h1>
			<p>CHOOSE AND MATCH CORRECT TRANSLATIONS BY DRAGGING AND DROPPING</p>
			<Link to="/language_app/dragndrop">
				<Button variant="warning" className="dragNdropButtons">
					Play
				</Button>
			</Link>
		</div>
	);
};

export default Gamelanding;
