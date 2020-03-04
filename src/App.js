import React, { Component } from 'react';
import './App.css';

class App extends Component {
  foo = () => 'Bars';
  render() {
    const name = 'John Doe';
    return (
      <div className="App">
        <h1>Hello {name.toLocaleUpperCase()}</h1>
        <p>This is the function foo -> {this.foo()}</p>
      </div>
    );
  }
}

export default App;