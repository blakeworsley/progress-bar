import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 600,
      height: 40,
      percentage: 90,
    };
  }
  render() {
    return (
      <div className="App">
        <ProgressBar
          width={this.state.width}
          height={this.state.height}
          percentage={this.state.percentage}
        />
        <div>
        <p>Change Progress Bar Percentage</p>
          <input
            type="range"
            min="1"
            max="100"
            value={this.state.percentage}
            onChange={e => this.setState({percentage: parseInt(e.target.value)})}
          />
          <input
            type="number"
            min="1"
            max="100"
            value={this.state.percentage}
            onChange={e => this.setState({percentage: parseInt(e.target.value)})}
          />
        </div>

        <div>
        <p>Change Progress Bar Height</p>
          <input
            type="range"
            min="10"
            max="1000"
            max={window.innerHeight - 240}
            onChange={e => this.setState({height: parseInt(e.target.value)})}
          />
          <input
            type="number"
            min="10"
            max={window.innerHeight - 240}
            value={this.state.height}
            onChange={e => this.setState({height: parseInt(e.target.value)})}
          />
        </div>

        <div>
        <p>Change Progress Bar Width</p>
          <input
            type="range"
            min="100"
            max={window.innerWidth}
            value={this.state.width}
            onChange={e => this.setState({width: parseInt(e.target.value)})}
          />
          <input
            type="number"
            min="100"
            max={window.innerWidth}
            value={this.state.width}
            onChange={e => this.setState({width: parseInt(e.target.value)})}
          />
        </div>
      </div>
    );
  }
}

export default App;
