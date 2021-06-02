import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
	return (
		<Router>
			<Header />
			<Main />
		</Router>
	);
}

export default App;
