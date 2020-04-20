import React, { Component } from "react";
import "../assets/common.css";
export default class stockRealease extends Component {
  render() {
    var a = (
      <tr>
        <td>268540</td>
        <td>QUIKRETE 40kg Portland Cement Type 10 F</td>
        <td>50</td>
        <td>10614141999996</td>
        <td>
          <div className="gtin-box">699999</div>
        </td>
      </tr>
    );
    return (
      <div className="container box">
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Regulator ID:
          </label>
          <div className="col-sm-6">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div className="table-responsive-md my-table">
        <table className="table table-bordered">
          <tr>
            <th >Consumption Order number</th>
            <th colspan="4">CO status: created</th>
          </tr>
          <tr>
            <td>XXX</td>
            <td colspan="4">items to be consumed</td>
          </tr>
          <tr>
            <th>Item number</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>GTIN</th>
            <th>BatchID</th>
          </tr>
          {a}
        </table>
        </div>
        <button class="btn btn-primary" type="submit">
          release
        </button>
      </div>
    );
  }
}
