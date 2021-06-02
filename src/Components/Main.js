import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../About";
import Alphabet from "../Alphabet/Alphabet";
import Gamelanding from "../Gamelanding";
import Menu from "../Menu";
import Modal from "../DragNDrop/ModalWindow";
import DragNDrop from "../DragNDrop/DragNDrop";
import Home from "../Home";

const Main = () => {
	return (
		<main>
			<Switch>
				<Route path="/language_app/" exact component={Home} />
				<Route path="/language_app/about" component={About} />
				<Route path="/language_app/alphabet" component={Alphabet} />
				<Route path="/language_app/dragndrop" component={DragNDrop} />
				<Route path="/language_app/gamelanding" component={Gamelanding} />
				<Route path="/language_app/menu" component={Menu} />
				<Route path="/language_app/modal" component={Modal} />
			</Switch>
		</main>
	);
};

export default Main;
