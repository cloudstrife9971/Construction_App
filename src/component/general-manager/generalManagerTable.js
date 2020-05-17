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
  getDtae=()=>{
    // console.log(this.props);
    var cts = this.props.CreateTs;
    var date = new Date(cts * 1000);
    var todayDate = date.getDate();
    var month =  date.getMonth();
    var year =  date.getFullYear();
    var formattedTime =
    todayDate + "-" + month + "-" + year;

return formattedTime

  }
  render() {
    // console.log(this.getDtae)
    return (
      <div
        onClick={() => {
          this.props.click();
          this.props.filter(this.props.PONumber);
        }}
        className={`container gmContainer my-table ${
          this.state.hover ? "shadow-sm" : null
        }`}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.removeShadow}
      >
        {/* <div className="container gmContainer my-table shadow-sm "  onMouseEnter={this.toggleHover}>  */}
        <div className="row">
          <div className="col-4">Order No</div>
          <div className="col-4">Status</div>
          <div className="col-4">Total</div>
        </div>
        <div className="row">
          <div className="col-4">{`00${this.props.id}`}</div>
          <div className="col-4">{`order created ${this.getDtae()}`}</div>
          <div className="col-4">{`$${this.props.Amount}`}</div>
        </div>
      </div>
    );
  }
}
