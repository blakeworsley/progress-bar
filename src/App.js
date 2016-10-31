import React, { Component } from 'react';
import Immutable from 'immutable';
import StackedBarGraph from './StackedBarGraph';
import DataPoint from './DataPoint';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Immutable.List.of(23, 87, 52, 46)
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <StackedBarGraph>
          { data.toArray().map((d, i) => <DataPoint value={d} key={i} />) }
        </StackedBarGraph>
        <div className="inputs">
          { data.toArray().map((d, i) => (
            <input
              type="number"
              value={d}
              key={i}
              onChange={e => this.setState({ data: data.set(i, +e.target.value) })}
            />
          )) }
        </div>
      </div>
    );
  }
}

export default App;
