import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MyReactClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: this.props.initialCount
        };
    }

    upCount() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                Hello, {this.props.name}!<br />
                You clicked the button {this.state.count} times.<br />
                <button onClick={this.upCount}>Click here!</button>
            </div>
        );
    }
}
MyReactClass.defaultProps = {
    name: 'Bob',
    initialCount: 0
};