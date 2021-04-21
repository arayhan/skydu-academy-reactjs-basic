import { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/detail" component={Detail} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
