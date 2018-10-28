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

let sumArr = 0;
for (let i = 0; i <ages.length ; i++) {
    sumArr += ages[i];
}
let rezult = ages.reduce(function (sum, current) {
    return sum + current;
}, 0);

var r = 0;
let rezult1 = ages.map(function (x) {
    return r += x;
});

// var str = "Widget with id";
//
// alert( str.indexOf("Widget") ); // 0, т.к. "Widget" найден прямо в начале str
// alert( str.indexOf("id") ); // 1, т.к. "id" найден, начиная с позиции 1
// alert( str.indexOf("widget") ); // -1, не найдено, так как поиск учитывает регистр

var str ='А роза упала на лапу Азора';

function isPolindrom (str) {
    str = str.toLocaleLowerCase();
    str = str.replace(/\s/g,'');

    if(str.length%2){
        for (let i = 0, j = str.length-1;  i <str.length, j >str.length/2 ; i++, j--) {
           if(str[i].indexOf(str[j]) == -1){
                return false;
           }
        }
        return true;
    }else{
        for (let i =0, j = str.length-1; i < str.length, j >=i; i++, j--) {
            if(str[i].indexOf(str[j]) == -1){
               return false;
            }
        }
        return true;
    }
}
//alert('Массив палиндром: ' + isPolindrom(str));


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

            <p><div>Дано массив {ages.toString()}</div>
            <div>найти MaxAge</div>
            <div>{viewSort}</div>
            <div>maxAge: {maxAge}</div></p>

            <p><div>Сумма массива: {sumArr}</div></p>
            <p><div>Сумма массива: {rezult}</div></p>
            <p><div>Сумма массива: {rezult1.toString()}</div></p>
            <p><div>Сумма массива: {r}</div></p>
            <p><div>Массив является полиндромом?: {str.toString()} - {isPolindrom(str).toString()}</div></p>



        </div>
    )
}




}