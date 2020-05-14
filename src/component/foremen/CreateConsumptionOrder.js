import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
export default class CreateConsumptionOrder extends Component {
  state = {
    po: null,
    current: null,
    purps: null,
    fdec: null,
    pquanty: null,
    conum: "XXX",
    ccorder: "New Order",
    invmngid: ["IM001", "IM002", "IM003", "IM004"],
    empty: false,
    alert: false,
    success: null,
  };
  handleType = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state.what_for, this.state.desc);
  };
  handleChange = (e) => {
    var value = e.target.value;
    var current = this.state.data.data.find((data) => {
      return data.PONumber === value;
    });
    this.setState({ current });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      po: this.state.current.PONumber,
      foreid: "FOOO1",
      purps: this.state.purps,
      fdec: this.state.fdec,
      ccorder: "created",
      pquanty: this.state.pquanty,
      futs: "1540343442",
    };
    axios
      .post(`http://localhost:4000/api/foremenConsumtion`, { ...user })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        this.setState({ conum: res.data.data.conum, ccorder: "created", alert: true,
        success: true });
      }).catch((e)=>{
console.log(e)
      })
  };
  componentDidMount = () => {
    axios.get(`http://localhost:4000/api/alldata`).then((res) => {
      const response = res.data;

      if (response.data) {
        let length = response.data.length;
        if (length > 0) {
          var filterData = response.data.filter((data) => {
            return ( 
              data.DoStatus === "arrived" && (data.GRStatus!=="backorder") &&
              (data.ForemenUpdate[0] ? !data.ForemenUpdate[0].conum : true)
            );
          });
          if (filterData.length > 0) {
            this.setState({
              data: filterData,
              current: filterData[0],
              po: filterData[0].PONumber,
              empty: false,
            });
          } else {
            this.setState({ empty: true });
          }
        } else {
          this.setState({ empty: true });
        }
      } else {
        this.setState({ empty: true });
      }
    });
  };
  render() {
    // console.log(this.state)
    if (this.state.empty) {
      return (
        <div className="status-message text-secondary bg-light">
          <h1>Waiting For Pick Up Inspection From Regulator...</h1>
        </div>
      );
    }
    var a = this.state.data ? (
      <tr>
        <td>{this.state.current.ItemNumber}</td>
        <td>{this.state.current.GTIN}</td>
        <td>{this.state.current.Description}</td>
        <td>
          <input
            className="gtin-box col"
            onChange={this.handleType}
            id="pquanty"
            required="true"
          />
        </td>
      </tr>
    ) : null;
    var po_number = this.state.data
      ? this.state.data.map((data) => {
          return <option>{data.PONumber}</option>;
        })
      : null;
    var InventoryManagerId = this.state.data
      ? this.state.data.map((data) => {
          return <option>{data.InvMngId}</option>;
        })
      : null;
      var alert = this.state.alert ? (
        this.state.success ? (
          <div class="alert alert-success" role="alert">
            You have Confirmed the order
          </div>
        ) : (
          <div class="alert alert-danger" role="alert">
            You have Disputed the order
          </div>
        )
      ) : null;
    return (
      <div className="container box_margin">
        <form action="" >
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              What for:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                onChange={this.handleType}
                id="purps"
                className="form-control"
                required="true"
              />
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Description:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                onChange={this.handleType}
                id="fdec"
                className="form-control"
                required="true"
              />
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              InventoryManager ID:
            </label>
            <div className="col-sm-6">
              <select class="form-control" id="exampleFormControlSelect1">
                {InventoryManagerId}
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
                <td colspan="2">{this.state.conum}</td>
                <td>{this.state.ccorder}</td>
                <td>Date and time</td>
              </tr>
              <tr>
                <th>Select Item</th>
                <th>GTIN:</th>
                <th>
                  <select class="form-control" onChange={this.handleChange}>
                    {po_number}
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
          <button class="btn btn-primary" type="submit"
          onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        {alert}
      </div>
    );
  }
}
