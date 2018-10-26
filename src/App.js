import React, { Component } from 'react';
import logo from './logo.svg';


import ManagedControlDemo from './ManagedControlDemo';
import MyReactClass from './MyReactClass';
import CommentsListContainer from './CommentsListContainer';
import Greeting from './Greeting';
import Counter from './Counter';


import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">

                <CommentsListContainer />

                <ManagedControlDemo/>

                <MyReactClass/>

                <Greeting/>

                <Counter>
                    {state =>(
                        <div>
                            <h2>The count is {state.count}</h2>
                        </div>
                    )}
                </Counter>

            </header>
        </div>
    );
  }
}

export default App;
