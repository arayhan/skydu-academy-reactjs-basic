// import logo from "./logo.svg";
import "./App.css";

function App() {
	const renderButton = () => {
		return (
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		);
	};

	const title = "Skydu Academy";
	const pokemonList = [
		{
			name: "Bulbasaur",
			color: "Green",
		},
		{
			name: "Charizard",
			color: "Red",
		},
	];

	const inputAttr = {
		type: "email",
		placeholder: "masukkan email",
		required: true,
	};

	return (
		<div className="App">
			<header className="App-header">
				<img
					style={{ width: "80rem" }}
					src="./assets/images/logo.svg"
					className="App-logo"
					alt="logo"
				/>
				<p>Hello World, {title}</p>
				<input {...inputAttr} />
				<ul>
					{pokemonList.map((pokemon) => (
						<li>{pokemon.color}</li>
					))}
				</ul>
				{renderButton()}
			</header>
		</div>
	);
}

export default App;
