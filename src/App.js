import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import LinkedListVisualizer from 'visualizer/LinkedList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LinkedListVisualizer />
      </div>
    );
  }
}

export default App;
