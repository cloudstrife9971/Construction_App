import React, { Component } from "react";
import "../assets/common.css";
export default class displayStatus extends Component {
  render() {
    var a = (
      <tr>
        <td>268540</td>
        <td>QUIKRETE 40kg Portland Cement Type 10 F</td>
        <td>50</td>
      </tr>
    );
    return (
      <div className="container box">
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Supplier ID:
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
        <div class="table-responsive-md my-table">
          <table className="table table-bordered">
            <tr>
              <td>Consumption Order number</td>
              <td colspan="2">CO status: ready to use</td>
            </tr>
            <tr>
              <td>XXX</td>
              <td colspan="2">items to be consumed</td>
            </tr>
            <tr>
              <th>Item number</th>
              <th>Description</th>
              <th>Quantity</th>
            </tr>
            {a}
          </table>
        </div>
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Ship to:
          </label>
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
        </div>
        <button class="btn btn-primary" type="submit">
          submit
        </button>
      </div>
    );
  }
}
