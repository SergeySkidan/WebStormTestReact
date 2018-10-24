import React, { Component } from 'react';
import logo from './logo.svg';

import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ManagedControlDemo from './ManagedControlDemo';
import MyReactClass from './MyReactClass';
import CommentsListContainer from './CommentsListContainer';


import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">


                <CommentsListContainer />
                <p></p>
                <FirstComponent />
                <p></p>
                <SecondComponent />
                <p></p>
                <ManagedControlDemo/>
                <p></p>
                <MyReactClass/>

            </header>
        </div>
    );
  }
}

export default App;
