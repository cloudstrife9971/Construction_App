import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";

export default class CreateOrder extends Component {
  state = {
    po: null,
    carrierID: [5968237138, 4924238572, 8479400671, 3224248701],
    ShipmentID: [5569817119, 1407232884, 2282578425, 6915980873],
    Truck_no: ["T001", "C041", "K301", "P314"],
    regulatorID: [7777856284, 9354568715, 9513122318, 8546901869],
    cid: null,
    shid: null,
    trno:null,
    regid: null,
    gtin: null,
    target: null,
    data: null,
    order: null,
    alert: false,
    success: null,
  };
  componentDidMount = () => {
    axios.get(`http://localhost:4000/api/alldata`).then((res) => {
      const persons = res.data;
      // console.log(persons);
      this.setState({
        data: persons,
        order: persons.data[0],
        po: persons.data[0].PONumber,
        cid:this.state.carrierID[0],
        shid:this.state.ShipmentID[0],
        trno:this.state.Truck_no[0],
        regid:this.state.regulatorID[0],
      });
    });
  };
  handleChange = (e) => {
    // console.log(this.state);
    this.setState({ [e.target.id]: e.target.value });
  };
  handlePoChange = (e) => {
    // console.log(e.target.value);
    var item = this.state.data.data.find((data) => {
      return data.PONumber === e.target.value;
    });
    // console.log(item);
    this.setState({ [e.target.id]: e.target.value, order: item });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      po: this.state.po,
      cid: this.state.cid,
      shid: this.state.shid,
      trno: this.state.trno,
      regid: this.state.regid,
      dosts: "expecting confirmation from regulator",
      gtin: this.state.gtin,
      uts: "1540343442",
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { ...user })
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        this.setState({ alert: true, success: true });
      }).catch(
        this.setState({ alert: true, success: false })
        )
  };
  render() {
    // console.log(this.state);
    var a = this.state.order ? (
      <tr>
        <td>{this.state.order.ItemNumber}</td>
        <td>{this.state.order.Description}</td>
        <td>{this.state.order.Amount}</td>
        {/* <td><div className="gtin-box">10614141999996</div> */}
        <td>
          <input
            type="number"
            onChange={this.handleChange}
            id="gtin"
            className="gtin-box"
          />
        </td>
        {/* </td> */}
      </tr>
    ) : null;
    var carrier_ids = this.state.carrierID.map((data) => {
      return <option>{data}</option>;
    });
    var Shipment_ids = this.state.ShipmentID.map((data) => {
      return <option>{data}</option>;
    });
    var regulatorID_ids = this.state.regulatorID.map((data) => {
      return <option>{data}</option>;
    });
    var Truck_no_ids = this.state.Truck_no.map((data) => {
      return <option>{data}</option>;
    });
    var po_numbers = this.state.data
      ? this.state.data.data.map((data) => {
          return <option>{data.PONumber}</option>;
        })
      : null;
      var alert = this.state.alert ? (
        this.state.success ? (
          <div class="alert alert-success" role="alert">
            Thank you your submission has been received
          </div>
        ) : (
          <div class="alert alert-danger" role="alert">
            Error - your submission has not been received
          </div>
        )
      ) : null;
  
    return (
      <div className="container box">
        <form action="" onSubmit={this.handleSubmit}>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Carrier ID:
            </label>
            <div className="col-sm-6">
              <select
                class="form-control"
                onChange={this.handleChange}
                id="cid"
              >
                {carrier_ids}
              </select>
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Shipment ID:
            </label>
            <div className="col-sm-6">
              <select
                class="form-control"
                onChange={this.handleChange}
                id="shid"
              >
                {Shipment_ids}
              </select>
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Truck no:
            </label>
            <div className="col-sm-6">
              <select
                class="form-control"
                onChange={this.handleChange}
                id="trno"
              >
                {Truck_no_ids}
              </select>
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Regulator ID:
            </label>
            <div className="col-sm-6">
              <select
                class="form-control"
                onChange={this.handleChange}
                id="regid"
              >
                {regulatorID_ids}
              </select>
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              PO Number:
            </label>
            <div className="col-sm-6">
              <select
                class="form-control"
                onChange={this.handlePoChange}
                id="po"
              >
                {po_numbers}
              </select>
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Buyer ID:
            </label>
            <div className="col-sm-6">
              {this.state.order ? this.state.order.BuyerID : null}
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Location:
            </label>
            <div className="col-sm-6">
              {this.state.order ? this.state.order.ShipTo : null}
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Delivery date:
            </label>
            <div className="col-sm-6">
              {this.state.order ? this.state.order.DeliveryDue : null}
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

          <button class="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        {alert}
      </div>
    );
  }
}
