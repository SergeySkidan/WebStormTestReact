import React, {Component} from 'react';

export  default class Greeting extends React.Component{
constructor(){
    super();
    this.state = {
        name: '',
    };
}

componentDidMount(){
    this.setState(()=>{
        return{
            name: 'William',
        };
        });
}

render(){
    return(
        <div>
            <h2>Hello {this.state.name}</h2>
        </div>
    )
}




}