import React, { Component } from "react";
import "../assets/common.css";

export default class otherApproval extends Component {
  render() {
    var a = (
      <tr>
        <td>268540</td>
        <td>QUIKRETE 40kg Portland Cement Type 10 F</td>
        <td>50</td>
        <td>10614141999996</td>
        <td>699999</td>
      </tr>
    );
    return (
      <div className="container box">
        <div class="table-responsive-md my-table">
          <table className="table table-bordered">
            <tr>
              <td>Consumption Order number</td>
              <td colspan="4">
                CO status: Expecting confirmation from regulator
              </td>
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
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            select Item to be inspected:
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
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
          Density:
          </label>
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <button class="btn btn-primary col" type="submit">
              Confirm
            </button>
          </div>
          <div className="col-sm-2">
            <button type="button" class="btn btn-light col">
              Dispute
            </button>
          </div>
        </div>
      </div>
    );
  }
}
