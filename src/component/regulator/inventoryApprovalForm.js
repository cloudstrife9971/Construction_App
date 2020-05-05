import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
export default class inventoryApprovalForm extends Component {
  state = {
    items: ["Cement", "Pipe"],
    input: null,
  };
  handleChange = (e) => {
    this.setState({ input: e.target.value });
    // console.log(this.state.input);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    var dost = e.target.id === "Confirm" ? "shipped" : "inDispute";

    // console.log(dost);
    const user = {
      po: this.props.PONumber,
      dosts: dost,
      uts: "1540343442",
    };

    axios
      .post(`http://localhost:4000/api/inventoryApproval`, { user })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
      });
  };
  conditionDisplay = () => {
    switch (this.state.input) {
      case "Cement":
        return (
          <div className="row form-group">
            <label htmlFor="" className="col-sm-3 col-form-label">
              Batch weight:
            </label>
            <div className="col-sm-3">
              <input type="text" className="form-control" />
            </div>
          </div>
        );
      case "Pipe":
        return (
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
          </div>
        );

      default:
        break;
    }
  };
  componentDidMount = () => {
    this.setState({ input: this.state.items[0] });
  };
  render() {
    var a = (
      <tr>
        <td>{this.props.ItemNumber}</td>
        <td>{this.props.Description}</td>
        <td>{this.props.Amount}</td>
        <td>{this.props.GTIN}</td>
      </tr>
    );
    var itemOptions = this.state.items.map((data) => {
      return <option>{data}</option>;
    });
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
            <select class="form-control" onChange={this.handleChange}>
              {itemOptions}
            </select>
          </div>
        </div>
        <div>{this.conditionDisplay()}</div>
        {/* <div className="row form-group">
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
            </div> */}
        <div className="row">
          <div className="col-sm-2">
            <button
              type="button"
              onClick={this.handleSubmit}
              id="Confirm"
              class="btn btn-light col"
            >
              Confirm
            </button>
          </div>
          <div className="col-sm-2">
            <button
              class="btn btn-primary col"
              onClick={this.handleSubmit}
              type="submit"
            >
              Dispute
            </button>
          </div>
        </div>
      </div>
    );
  }
}
