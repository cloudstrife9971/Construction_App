import React, { Component } from "react";
import "../assets/common.css";
export default class inventoryApproval extends Component {
  render() {
    var a = (
      <tr>
        <td>268540</td>
        <td>QUIKRETE 40kg Portland Cement Type 10 F</td>
        <td>100</td>
        <td>10614141999996</td>
      </tr>
    );
    return (
      <div className="container">
        <div className="table-responsive-md my-table">
          <table className="table table-bordered">
            <tr>
              <td colspan="2">Goods Receipt number</td>
              <td colspan="2">
                GO status: expecting confirmation from regulator
              </td>
            </tr>
            <tr>
              <td colspan="2">XXX</td>
              <td colspan="2">Items receipt</td>
            </tr>
            <tr>
              <th>Item number</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>GTIN</th>
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
          <label htmlFor="" className="col-sm-3 col-form-label">
            Batch weight:
          </label>
          <div className="col-sm-3">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row form-group">
          <label htmlFor="" className="col-sm-3 col-form-label">
            actual outside diameter:
          </label>
          <div className="col-sm-3">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row form-group">
          <label htmlFor="" className="col-sm-3 col-form-label">
            average inside diameter:
          </label>
          <div className="col-sm-3">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row form-group">
          <label htmlFor="" className="col-sm-3 col-form-label">
            pipe wall width thickness:
          </label>
          <div className="col-sm-3">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row form-group">
          <label htmlFor="" className="col-sm-3 col-form-label">
            pipe weight:
          </label>
          <div className="col-sm-3">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <button type="button" class="btn btn-light col">
              Confirm
            </button>
          </div>
          <div className="col-sm-2">
            <button class="btn btn-primary col" type="submit">
              Dispute
            </button>
          </div>
        </div>
      </div>
    );
  }
}
