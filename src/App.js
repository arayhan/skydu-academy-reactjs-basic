import { Component } from "react";
import "./App.css";
import Home from "./pages/Home";

class App extends Component {
	render() {
		return (
			<div className="App">
				<nav>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
					</ul>
				</nav>
				<Home />
			</div>
		);
	}
}

export default App;
