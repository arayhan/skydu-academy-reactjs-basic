import React, { Component } from "react";

class Detail extends Component {
	render() {
		const params = this.props.match.params;
		const pokemon = params.pokemon;
		return <div>Detail Pokemon : {pokemon}</div>;
	}
}

export default Detail;
