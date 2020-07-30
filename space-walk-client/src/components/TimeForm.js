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

    const response = await fetch('/astronaut/time_slots', requestOptions);
    const selectedTime = await response.json();
    alert(`Space Walk Confirmed! ${selectedTime.id}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>When would you like space person to walk?
          <select value={this.state.selectedTime} onChange={this.handleChange}>
            {this.props.availableTimes.map(timeSlot => <option value={timeSlot.id}>{timeSlot.start_time}</option>)}
          </select>
        </label>
        <input type="submit" value="Walk On!" />
      </form>
    )
  }
}