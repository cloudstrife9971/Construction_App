import React, { Component } from "react";
import "../assets/common.css";
import axios from 'axios';
export default class Status extends Component {
  state= {

  }
  componentDidMount=()=>{
    axios.get(``)
    .then(res => {
      const persons = res.data;
      // this.setState({ persons });
    })
  }
  render() {
    var a = (
      <tr>
        <td>268540</td>
        <td>QUIKRETE 40kg Portland Cement Type 10 F</td>
        <td>100</td>
        <td>$1,428</td>
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
            <td>automatically Generated</td>
            <td colspan="2">PO Status: Created</td>
            <td>$2531.52</td>
          </tr>
          <tr>
            <th>Item number</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {a}
        </table>
        </div>
      </div>
    );
  }
}
