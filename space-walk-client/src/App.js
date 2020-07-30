import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableTimes: []
    }
  }

  componentDidMount() {
    this.getList();
  }

  getList = async () => {
    const response = await fetch('/astronaut/time_slots');
    const availableTimes = await response.json();
    console.log(availableTimes);
    this.setState({ availableTimes });
  }

  render() {
    const { availableTimes } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p> {JSON.stringify(availableTimes)}</p>
        </header>
      </div>
    );
  }
}

export default App;
