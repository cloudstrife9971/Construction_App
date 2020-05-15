import React, { Component } from "react";
import "../assets/common.css";
export default class statuTable extends Component {
  render() {
    console.log(this.props);
    var a = (
      <tr>
        <td>{this.props.ItemNumber}</td>
        <td>{this.props.Description}</td>
        <td>{this.props.Quantity}</td>
        <td>{`$${this.props.UnitPrice}`}</td>
      </tr>
    );
    return (
      <div className="container box">
        <div className="table-responsive-md">
          <table className="table table-bordered ">
            <tr>
              <th>Purchase Order number</th>
              <th colspan="2">Items</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>{this.props.PONumber}</td>
              <td colspan="2">{`PO Status: ${this.props.PoStatus}`}</td>
              <td>{`$${this.props.Amount}`}</td>
            </tr>
            <tr>
              <th>Item number</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit Price</th>
            </tr>
            {a}
          </table>
        </div>
      </div>
    );
  }
}
