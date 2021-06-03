import React from "react";
import Logo from "../language_app_logo.png";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
	return (
		<header>
			<Link to="/language_app/">
				<img className="header-logo" src={Logo} alt="Logo" />
			</Link>
			<nav>
				<ul>
					<li>
						<Link to="/language_app/">Home</Link>
					</li>

					<li>
						<Link to="/language_app/about">About</Link>
					</li>
					<li>
						<Link to="/language_app/alphabet">Alphabet</Link>
					</li>
					<li>
						<Link to="/language_app/gamelanding">Drag'n'Drop</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
