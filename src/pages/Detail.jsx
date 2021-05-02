import React, { Component } from "react";

class Detail extends Component {
	state = {
		params: this.props.match.params.pokemon,
		details: null,
	};

	componentDidMount() {
		this.fetchPokemonDetail();
	}

	fetchPokemonDetail = () => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.params}`)
			.then((data) => data.json())
			.then((json) => this.setState({ details: json }));
	};

	render() {
		const { details, params } = this.state;
		return (
			<div>
				<div>Detail Pokemon : {params}</div>
				{!details && <div>Loading Details...</div>}
				{details && (
					<div>
						<h1>Sprites</h1>
						<img src={details.sprites.back_default} alt="" />
						<img src={details.sprites.back_female} alt="" />
						<img src={details.sprites.back_shiny} alt="" />
						<img src={details.sprites.back_shiny_female} alt="" />
						<img src={details.sprites.front_default} alt="" />
					</div>
				)}
			</div>
		);
	}
}

export default Detail;
