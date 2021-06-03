import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<div className="container">
			<Link to="/language_app/alphabet">
				<h1 className="style-font">Alphabet</h1>
			</Link>

			<p className="menu-p">OR</p>

			<Link to="/language_app/gamelanding">
				<h1 className="style-font">Drag'n'Drop</h1>
			</Link>
		</div>
	);
};

export default Menu;
