import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Doe';
    const loading = false;

    if (loading) {
      return <h3>Loading...</h3>
    }

    return (
      <div className="App">
        <h1>Hello {name}</h1>
      </div>
    );
  }
}

export default App;