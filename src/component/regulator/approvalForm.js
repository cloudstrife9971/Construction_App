import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
export default class approvalForm extends Component {
  state = {
    items: ["Cement", "Pipe"],
    input: null,
    bweght: null,
    ccorder: this.props.ForemenUpdate[0]
      ? this.props.ForemenUpdate[0].ccorder
      : null,
    alert: false,
    success: null,
  };
  handleChange = (e) => {
    this.setState({ input: e.target.value });
    // console.log(this.state.input);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    var dost = e.target.id === "Confirm" ? "ready to use" : "inDispute";

    // console.log(dost);
    const user = {
      po: this.props.PONumber,
      ccorder: dost,
      conum: this.props.ForemenUpdate[0].conum,
      bweght: "1000",
      futs: "1540340000",
    };

    axios
      .post(`http://localhost:4000/api/consumptionApproval`, { ...user })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        dost === "ready to use"
          ? this.setState({
              ccorder: "ready to use",
              alert: true,
              success: true,
            })
          : this.setState({ alert: true, success: false });
      })
      .catch((e) => {
        console.log(e);
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
              <input type="text" className="form-control" required="true" />
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
                <input type="text" className="form-control" required="true" />
              </div>
            </div>
            <div className="row form-group">
              <label htmlFor="" className="col-sm-3 col-form-label">
                average inside diameter:
              </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" required="true" />
              </div>
            </div>
            <div className="row form-group">
              <label htmlFor="" className="col-sm-3 col-form-label">
                pipe wall width thickness:
              </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" required="true" />
              </div>
            </div>
            <div className="row form-group">
              <label htmlFor="" className="col-sm-3 col-form-label">
                pipe weight:
              </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" required="true" />
              </div>
            </div>
          </div>
        );

      default:
        break;
    }
  };

  render() {
    // console.log(this.props.ForemenUpdate)
    var a = (
      <tr>
        <td>{this.props.ItemNumber}</td>
        <td>{this.props.Description}</td>
        <td>{this.props.Amount}</td>
        <td>{this.props.GTIN}</td>
        <td>
          {this.props.ForemenUpdate[0]
            ? this.props.ForemenUpdate[0].batchid
            : null}
        </td>
      </tr>
    );
    var itemOptions = this.state.items.map((data) => {
      return <option>{data}</option>;
    });
    var alert = this.state.alert ? (
      this.state.success ? (
        <div class="alert alert-success" role="alert">
          You have Confirmed the order
        </div>
      ) : (
        <div class="alert alert-danger" role="alert">
          You have Rejected the order
        </div>
      )
    ) : null;
    return (
      <div className="container box">
        <form action="">
          <div class="table-responsive-md my-table">
            <table className="table table-bordered">
              <tr>
                <td>Consumption Order number</td>
                <td colspan="4">
                  {` CO status: ${this.state.ccorder}`}
                  {/* {this.props.ForemenUpdate[0].conum} */}
                </td>
              </tr>
              <tr>
                <td>
                  {this.props.ForemenUpdate[0]
                    ? this.props.ForemenUpdate[0].conum
                    : null}
                </td>
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
              <select class="form-control" onChange={this.handleChange}>
                {itemOptions}
              </select>
            </div>
          </div>
          <div>{this.conditionDisplay()}</div>
          <div className="row">
            <div className="col-sm-2">
              <button
                class="btn btn-primary col"
                onClick={this.handleSubmit}
                id="Confirm"
                type="submit"
              >
                Confirm
              </button>
            </div>
            <div className="col-sm-2">
              <button
                onClick={this.handleSubmit}
                type="submit"
                class="btn btn-light col"
              >
                Dispute
              </button>
            </div>
          </div>
        </form>
        {alert}
      </div>
    );
  }
}
