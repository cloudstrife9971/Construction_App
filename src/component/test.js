import React, { Component } from "react";

export default class test extends Component {
  state = {
    pointer: 1,
  };
  handleClick = () => {
    var a = this.state.pointer;
    a++;
    this.setState({ pointer: a });
    console.log(this.state.pointer)
  };
  render() {
    // console.log(this.state.pointer)
    return (
      <div>
        {/* <h1>hello world</h1> */}
        <div>{this.state.pointer}</div>
        <button onClick={this.handleClick}>
          <h1>hello world</h1>
        </button>
      </div>
    );
  }
}
