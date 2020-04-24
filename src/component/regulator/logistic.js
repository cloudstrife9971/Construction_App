import React, { Component } from "react";
import "../assets/common.css";
import { Switch } from "react-router";
export default class logistic extends Component {
  state = {
    items: ["Cement", "Pipe"],
    input: null,
  };
  handleChange = (e) => {
    this.setState({ input: e.target.value });
    console.log(this.state.input);
  };
  componentDidMount = () => {
    this.setState({ input: this.state.items[0] });
  };
  render() {
  
    // console.log(this.state.input)
    var itemOptions = this.state.items.map((data) => {
      return <option>{data}</option>;
    });
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
        <div class="table-responsive-md my-table">
          <table className="table table-bordered">
            <tr>
              <td colspan="2">Delivery Order number</td>
              <td colspan="2">
                DO status: expecting confirmation from regulator
              </td>
            </tr>
            <tr>
              <td colspan="2"> XXX</td>
              <td colspan="2">Items</td>
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
          <label htmlFor="" className="col-sm-3 col-form-label">
            select Item to be inspected:
          </label>
          <div className="col-sm-3">
            <select
              class="form-control"
              onChange={this.handleChange}
              id="exampleFormControlSelect1"
            >
              {itemOptions}
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
       
        <div>
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
      </div>
    );
  }
}
