import React, { Component } from "react";
import "../assets/common.css";
export default class CreateOrder extends Component {
  render() {
      var a = 
      <tr>
          <td>268540</td>
          <td>QUIKRETE
40kg Portland
Cement Type
10 F</td>
          <td>100</td>
          {/* <td><div className="gtin-box">10614141999996</div> */}
          <td><input type="number" className="gtin-box"/></td>
              {/* </td> */}
      </tr>
    return (
      <div className="container box">
        <form action="">
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Carrier ID:
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
              Location:
            </label>
            <div className="col-sm-6">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Delivery date:
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
              PO Number:
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
              <th>Delivery Order number</th>
              <th colspan="3">DO status: new order</th>
            </tr>
            <tr>
              <td>XXX</td>
              <td colspan="3">Items</td>
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
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
     
      </div>
    );
  }
}
