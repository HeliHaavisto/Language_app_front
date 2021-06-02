import React from "react";
import Logo from "./language_app_logo.png";

const About = () => {
	return (
		<div className="container">
			<h1 className="style-font">About</h1>
			<img src={Logo} alt="logo" className="logo" />
			<div className="about-us">
				<p>This is our team project made by 4 awesome students : </p>
				<ul>
					<li>Aryal Sagar</li>
					<li>Ivankina Elena</li>
					<li>Haavisto Heli</li>
					<li>Iolanta Ubozhenko</li>
				</ul>

				<p>Frond end is made with React Js.</p>
			</div>
		</div>
	);
};

export default About;
