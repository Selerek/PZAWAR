import React, { Component } from 'react';
import Task01 from './task01';
import json from './posts.json';

class Slider01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };
    slicedData = json.slice(0, this.state.value);

    render() {
       

        return (
            <div>
            <input
                type="range"
                min="0"
                max="100"
                value={this.state.value}
                onChange={this.handleChange}
            />
            <div>{this.state.value}</div>
            <div>
                {this.slicedData.map((post, index) => (
                    <div key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
            </div>
        );
    }
}

export default Slider01;