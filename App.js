import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // Method to increment the counter
  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>React Counter</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.incrementCounter}>
          Increment
        </button>
      </div>
    );
  }
}
export default Counter;
