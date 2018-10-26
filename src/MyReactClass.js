import React, { Component } from 'react';
import ReactDOM from 'react-dom';
let message = '';

export default class MyReactClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 1
        };
    }

    onClick(e) {
        this.setState({
            count: this.state.count + 1
        });

        if(+this.state.count == 1){
            message = this.state.count + ' раз ';
        }
        if(+this.state.count == 2||+this.state.count == 3||+this.state.count == 4){
            message = this.state.count + ' раза ';
        }
        if(+this.state.count >= 5){
            message = this.state.count + ' раз ';
        }
    }




    render() {
        return (
            <div>
                Кнопка нажата {message}
                <button onClick={this.onClick.bind(this)}>Нажми</button>
            </div>
        )
    }
}