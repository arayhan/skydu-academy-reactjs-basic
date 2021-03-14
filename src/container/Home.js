import { Component } from "react";
import Card from "../component/Card";
import "./Home.css";

class Home extends Component {
	render() {
		return (
			<div className="home">
				<Card />
				<Card />
				<Card />
			</div>
		);
	}
}

export default Home;
