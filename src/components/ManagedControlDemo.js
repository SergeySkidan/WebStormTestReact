import React from 'react';
import {render} from 'react-dom';


export default class ManagedControlDemo extends React.Component {
    constructor(props){
        super(props);
        this.state = {message: ""};
    }
    handleChange(e){
        this.setState({message: e.target.value});
    }
    render() {
        return (
            <div>
                {/*  &ensp  добавляет двойной пробел */}
                Введите что-нибудь &ensp;
                <input
                    onChange={this.handleChange.bind(this)}
                    value={this.state.message}
                    autoFocus />
                &emsp; {this.state.message}
            </div>
        );
    }
}
