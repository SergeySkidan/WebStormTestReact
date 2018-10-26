import React, { Component } from 'react';
import logo from './logo.svg';


import ManagedControlDemo from './components/ManagedControlDemo';
import MyReactClass from './components/MyReactClass';
import CommentsListContainer from './components/CommentsListContainer';
import Greeting from './components/Greeting';
import Counter from './components/Counter';


import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">

                <CommentsListContainer />

                <ManagedControlDemo/>

                <MyReactClass/>

                <Counter>
                    {state =>(
                        <div>
                            Счетчик кликов по надписи {state.count}
                        </div>
                    )}
                </Counter>

                <Greeting/>





            </header>
        </div>
    );
  }
}

export default App;
