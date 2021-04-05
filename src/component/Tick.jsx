import React, { Component } from 'react';

class Tick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Component Detik',
            detik: 0,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log('detik : ' + this.state.detik);
            this.setState({
                detik: this.state.detik + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div>Detik ke : {this.state.detik}</div>
            </div>
        );
    }
}

export default Tick;