import React, { Component } from "react";
import Card from "../component/Card";
import "./Home.css";

class Home extends Component {
	state = {
		title: "Home",
		isShowCards: true,
		isDarkMode: false,
		listPokemon: [
			{
				title: "Charizard",
				like: 0,
				deskripsi:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus eligendi modi quis natus? Earum, distinctio? Perspiciatis nostrum ab repellendus exercitationem, quidem tempora assumenda debitis libero natus, sed, molestiae doloremque!",
			},
			{
				title: "Pikachu",
				like: 0,
				deskripsi:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus eligendi modi quis natus? Earum, distinctio? Perspiciatis nostrum ab repellendus exercitationem, quidem tempora assumenda debitis libero natus, sed, molestiae doloremque!",
			},
			{
				title: "Bulbasaur",
				like: 0,
				deskripsi:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus eligendi modi quis natus? Earum, distinctio? Perspiciatis nostrum ab repellendus exercitationem, quidem tempora assumenda debitis libero natus, sed, molestiae doloremque!",
			},
		],
	};

	handleDarkMode = () => {
		this.setState({ isDarkMode: !this.state.isDarkMode });
	};

	sayHello = () => {
		alert("Halo");
	};

	handleLike = (index) => {
		const { listPokemon } = this.state;
		listPokemon[index].like = listPokemon[index].like + 1;
		this.setState({ listPokemon: listPokemon });
	};

	render() {
		return (
			<div>
				<h1>Halaman {this.state.title}</h1>
				<button
					onClick={() =>
						this.setState({ isShowCards: !this.state.isShowCards })
					}
				>
					{this.state.isShowCards ? "Hide Cards" : "Show Cards"}
				</button>
				<button
					onClick={() => {
						this.handleDarkMode();
						this.sayHello();
					}}
				>
					{this.state.isDarkMode ? "Light Mode" : "Dark Mode"}
				</button>

				{/* NOTES : LUPA NGASI TAU CARA CONDITIONAL RENDERING KAYA GINI :
					this.state.isShowCards && ()
					!this.state.isShowCards && 
				 */}
				{this.state.isShowCards ? (
					<div className="card-container">
						{this.state.listPokemon.map((pokemon, index) => {
							return (
								<Card
									isDarkMode={this.state.isDarkMode}
									title={pokemon.title}
									like={pokemon.like}
									deskripsi={pokemon.deskripsi}
									handleCopyDeskripsi={this.handleCopyDeskripsi}
									handleLike={() => this.handleLike(index)}
								/>
							);
						})}
					</div>
				) : null}
			</div>
		);
	}
}

export default Home;
