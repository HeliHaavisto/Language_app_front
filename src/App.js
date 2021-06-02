import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Alphabet from "./Alphabet/Alphabet";
import Gamelanding from "./Gamelanding";
import Menu from "./Menu";
import Modal from "./DragNDrop/ModalWindow";
import DragNDrop from "./DragNDrop/DragNDrop";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/language_app/" exact>
					<Home />
				</Route>
				<Route path="/language_app/about">
					<About />
				</Route>
				<Route path="/language_app/alphabet">
					<Alphabet />
				</Route>
				<Route path="/language_app/dragndrop">
					<DragNDrop />
				</Route>
				<Route path="/language_app/gamelanding">
					<Gamelanding />
				</Route>
				<Route path="/language_app/menu">
					<Menu />
				</Route>
				<Route path="/language_app/modal">
					<Modal />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
