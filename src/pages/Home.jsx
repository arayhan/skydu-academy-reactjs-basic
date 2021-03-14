import React, { Component } from 'react'
import Card from '../component/Card';
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Halaman Home</h1>
                <div className="card-container">
                    <Card title="Charizard" deskripsi="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus eligendi modi quis natus? Earum, distinctio? Perspiciatis nostrum ab repellendus exercitationem, quidem tempora assumenda debitis libero natus, sed, molestiae doloremque!" />
                    <Card title="Pikachu" deskripsi="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus eligendi modi quis natus? Earum, distinctio? Perspiciatis nostrum ab repellendus exercitationem, quidem tempora assumenda debitis libero natus, sed, molestiae doloremque!" />
                    <Card title="Bulbasaur" deskripsi="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus eligendi modi quis natus? Earum, distinctio? Perspiciatis nostrum ab repellendus exercitationem, quidem tempora assumenda debitis libero natus, sed, molestiae doloremque!" />
                    <Card />
                </div>
            </div>
        )
    }
}

export default Home