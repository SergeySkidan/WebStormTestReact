
import React, {Component} from 'react';

export  default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    }

increment = () => {
this.setState(prevState =>{
    return{
        count: prevState.count +1,
    };
    });
};
    render(){
        return(
            <div onClick={this.increment}>{this.props.children(this.state)}</div>
        )
    }


}