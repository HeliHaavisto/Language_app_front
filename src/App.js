import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Alphabet from "./Alphabet";
import Dragndrop from "./Dragndrop";
import Gamelanding from "./Gamelanding";
import Menu from "./Menu";
import Modal from "./Modal";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/alphabet">
					<Alphabet />
				</Route>
				<Route path="/dragndrop">
					<Dragndrop />
				</Route>
				<Route path="/gamelanding">
					<Gamelanding />
				</Route>
				<Route path="/menu">
					<Menu />
				</Route>
				<Route path="/modal">
					<Modal />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
