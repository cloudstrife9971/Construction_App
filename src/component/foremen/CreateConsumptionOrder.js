import React, { Component } from "react";
import "../assets/common.css";
export default class CreateConsumptionOrder extends Component {
  render() {
    var a = (
      <tr>
        <td>268540</td>
        <td>10614141999996</td>
        <td>QUIKRETE 40kg Portland Cement Type 10 F</td>
        <td>
          <div className="gtin-box">50</div>
        </td>
      </tr>
    );
    return (
      <div className="container box">
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            What for:
          </label>
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Description:
          </label>
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            InventoryManager ID:
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
              <th colspan="2">Consumption Order number</th>
              <th>CO status</th>
              <th>Date</th>
            </tr>
            <tr>
              <td colspan="2">XXX</td>
              <td>New order</td>
              <td>Date and time</td>
            </tr>
            <tr>
              <th>Select Item</th>
              <th>GTIN:</th>
              <th>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </th>
              <th>
                <button type="button" class="btn btn-success col">
                  Add Item
                </button>
              </th>
            </tr>
         {a}
          </table>
        </div>
        <button class="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    );
  }
}
