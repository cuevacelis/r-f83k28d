import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { incrementa: 0 };
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.incrementa}</span>
        <button id="inc" onClick={() => this.setState({ incrementa: ++this.state.incrementa })}>Incrementa</button>
      </div>
    );
  }
}

export default App;
