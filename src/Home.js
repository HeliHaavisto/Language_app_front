import React from "react";
import Logo from "./language_app_logo.png";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="container">
			<h1>Welcome to</h1>
			<img src={Logo} alt="logo" className="logo" />
			<p className="p-main-page">Language learning application</p>
			<Link to="/language_app/menu">
				<h2>Start Learning now</h2>
			</Link>
		</div>
	);
};

export default Home;
