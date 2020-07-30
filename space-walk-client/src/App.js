import React, { Component } from 'react';
import './App.css';
import TimeForm from './components/TimeForm';

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
    this.setState({ availableTimes });
  }

  render() {
    const { availableTimes } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <TimeForm availableTimes={availableTimes}/>
        </header>
      </div>
    );
  }
}

export default App;
