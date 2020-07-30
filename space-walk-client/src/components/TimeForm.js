import React, { Component } from 'react';

export default class TimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTime: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

  }

  handleSubmit(event) {

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