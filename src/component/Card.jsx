import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
	return (
		<div className={`card ${props.isDarkMode ? "darkMode" : ""}`}>
			<h1>{props.title}</h1>
			<p onCopy={() => props.handleCopyDeskripsi()}>{props.deskripsi}</p>
			<Link to="/detail">Read More</Link>
			<button onClick={() => props.handleLike()}>Like</button> : {props.like}
		</div>
	);
};

Card.defaultProps = {
	title: "Your Title",
	deskripsi: "Your Description",
};

export default Card;
