import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <p>{props.deskripsi}</p>
        </div>
    )
}

Card.defaultProps = {
    title: "Your Title",
    deskripsi: "Your Description"
}

export default Card
