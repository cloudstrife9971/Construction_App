import React, { Component } from "react";
import "../assets/common.css";

export default class CreateReciept extends Component {
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
      <div className="container box">
        <form action="">
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            PO number:
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
            DO number:
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
            Carrier ID:
          </label>
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Location:
          </label>
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
        </div>{" "}
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Delivery date:
          </label>
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
        </div>{" "}
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Expected delivery data (same as delivery due at time of purchase):
          </label>
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Buyer ID:
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
            Shipment ID:
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
            Truck no:
          </label>
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
        </div>
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
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            In stock location (GIS):
          </label>
          <div className="col-sm-6">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="table-responsive-md my-table">
        <table className="table table-bordered">
          <tr>
            <td colspan="2">Goods Receipt number</td>
            <td colspan="2">GR status: new order</td>
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
        <button class="btn btn-primary" type="submit">Button</button>
        </form>
      </div>
    );
  }
}
