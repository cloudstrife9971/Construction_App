import React, { Component } from "react";
import "../assets/common.css";
export default class Order extends Component {
  render() {
    var a = (
      <tr>
        <td>268540</td>
        <td>QUIKRETE 40kg Portland Cement Type 10 F</td>
        <td>100</td>
        <td>$1,428</td>
        <td>
          <a class="btn btn-success col" href="#" role="button">
            Link
          </a>
          <a class="btn btn-danger col btn-mgn" href="#" role="button">
            Link
          </a>
        </td>
        <td>XYZ</td>
      </tr>
    );
    return (
      <div className="container box">
        <dl class="row">
          <dt class="col-sm-2">Ship to:</dt>
          <dd class="col-sm-9">XXXXXX</dd>

          <dt class="col-sm-2">Delivery Due:</dt>
          <dd class="col-sm-9">XXXXXX</dd>

          <dt class="col-sm-2">Buyer ID:</dt>
          <dd class="col-sm-9">XXXXXX</dd>
        </dl>
        <div class="table-responsive-md my-table">
          <table className="table table-bordered my-table">
            <tr>
              <th colspan="2">Purchase Order number</th>
              <th colspan="2">Items</th>
              <th colspan="2">Total</th>
            </tr>
            <tr>
              <td colspan="2">XXX</td>
              <td colspan="2">PO Status: Created</td>
              <td colspan="2">$2531.52</td>
            </tr>
            <tr>
              <th>Item number</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Decision</th>
              <th>Message</th>
            </tr>
            {a}
          </table>
        </div>
      </div>
    );
  }
}
