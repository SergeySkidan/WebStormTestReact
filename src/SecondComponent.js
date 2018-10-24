import React, { Component } from 'react';

export default class SecondComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true
        };
        // This is to bind context when passing onClick as a callback
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.setState((prevState, props) => ({
            toggle: !prevState.toggle
        }));
    }

    render() {
        return (
            <div onClick={this.onClick}>
                Hello, {this.props.name}! I am a SecondComponent.
                <br />
                Toggle is: {this.state.toggle}
            </div>
        );
    }
}