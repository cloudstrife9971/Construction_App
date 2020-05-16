import React, { Component } from "react";
import "../assets/common.css";
export default class generalManagerTable extends Component {
  state = {
    hover: false,
  };
  toggleHover = () => {
    this.setState({ hover: true });
  };
  removeShadow = () => {
    this.setState({ hover: false });
  };
  render() {
    // console.log(this.props)
    return (
      <div
        onClick={() => {
          this.props.click()
          this.props.filter(this.props.PONumber)
        }}
        className={`container gmContainer my-table ${
          this.state.hover ? "shadow-sm" : null
        }`}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.removeShadow}
      >
        {/* <div className="container gmContainer my-table shadow-sm "  onMouseEnter={this.toggleHover}>  */}
        <div className="row">
          <div className="col-4">order #</div>
          <div className="col-4">Status</div>
          <div className="col-4">Total</div>
        </div>
        <div className="row">
          <div className="col-4">001</div>
          <div className="col-4">order created 2017-10</div>
          <div className="col-4">$9125</div>
        </div>
      </div>
    );
  }
}
