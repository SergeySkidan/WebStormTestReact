import React, {Component} from 'react';


const ages = [21,18,42,40,64,63,34,77];
let viewSort = '';
const maxAge = ages.reduce((max, age) => {

    viewSort += (`${age} > ${max} = ${age > max}  `)+"   \n";

    if (age > max) {
        return age
    } else {
        return max
    }
}, 0);



export  default class Greeting extends React.Component{
constructor(){
    super();
    this.state = {
        name: '',
        timer: 0,
    };
    this.countingSecond = this.countingSecond.bind(this)
}

    countingSecond() {
         this.setState({
          timer:  this.state.timer +1
        })
    }
    componentWillMount() {
        setInterval(this.countingSecond, 2000)
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
            <p><div>Привет {this.state.name} - Ваше время нахождения на сайте: {this.state.timer} сек.</div></p>

            <p><div>Дано массив [21,18,42,40,64,63,34,77]</div>
            <div>найти MaxAge</div>
            <div>{viewSort}</div>
            <div>maxAge: {maxAge}</div></p>

            <p><div>{this.state.timer}</div></p>

        </div>
    )
}




}