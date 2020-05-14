import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
export default class logisticForm extends Component {
  state = {
    items: ["Cement", "Pipe"],
    input: null,
    dosts: null,
    alert: false,
    success: null,
  };
  handleSubmit = (e) => {
    e.preventDefault();

    var dost = e.target.id === "Confirm" ? "shipped" : "inDispute";

    const user = {
      po: this.props.PONumber,
      dosts: dost,
      uts: "1540343442",
    };

    axios
      .post(`http://localhost:4000/api/logisticApproval`, { ...user })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        (dost==="shipped")?(this.setState({
          dosts: res.data.data.dosts,
          alert: true,
          success: true,
        })):(this.setState({ alert: true, success: false }))
        
      })
      .catch((e)=>{console.log(e)});
  };
  handleChange = (e) => {
    this.setState({ input: e.target.value });
    // console.log(this.state.input);
  };
  componentDidMount = () => {
    this.setState({ input: this.state.items[0], dosts: this.props.DoStatus });
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
              <input type="text" className="form-control" required="true"/>
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
    //   console.log(this.props)
    // console.log(this.state.input)
    var itemOptions = this.state.items.map((data) => {
      return <option>{data}</option>;
    });
    var a = (
      <tr>
        <td>{this.props.ItemNumber}</td>
        <td>{this.props.Description}</td>
        <td>{this.props.Quantity}</td>
        <td>{this.props.GTIN}</td>
      </tr>
    );
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
                <th colspan="2">Delivery Order number</th>
                <th colspan="2">{`DO status: ${this.state.dosts}`}</th>
              </tr>
              <tr>
                <td colspan="2"> {this.props.DoNumber}</td>
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
              <select class="form-control" onChange={this.handleChange}>
                {itemOptions}
              </select>
            </div>
          </div>
          <div>{this.conditionDisplay()}</div>
          <div className="row">
            <div className="col-sm-2">
              <button
                onClick={this.handleSubmit}
                id="Confirm"
                class="btn btn-primary col"
                type="submit"
              >
                Confirm
              </button>
            </div>
            <div className="col-sm-2">
              <button
                class="btn btn-light col"
                onClick={this.handleSubmit}
                type="submit"
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
