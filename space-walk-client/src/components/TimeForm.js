import React, { Component } from 'react';

export default class TimeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTime: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ selectedTime: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: this.state.selectedTime })
    };

    fetch('/astronaut/time_slots', requestOptions)
      .then(async response => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        alert(`Space Walk Confirmed! ${data.id}`);
      })
      .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('We had a problem!', error);
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>When would you like space person to walk?
          <select value={this.state.selectedTime} onChange={this.handleChange}>
            {this.props.availableTimes.map(timeSlot => <option key={timeSlot.id} value={timeSlot}>{timeSlot.start_time}</option>)}
          </select>
        </label>
        <input type="submit" value="Walk On!" />
      </form>
    )
  }
}