import React, { Component } from 'react';

export default class MyComponent extends Component {
  state = {
    count: 0,
    date: new Date(),
  }
  addClick = () => {
    this.setState = ({ count }) => ({
      count: count + 1,
    })
  }
  render() {
    const { date } = this.state;
    return (
      <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        <button type="button" onClick={this.addClick}>Click</button>
      </div>
    );
  }
}
