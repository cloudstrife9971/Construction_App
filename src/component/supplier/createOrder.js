import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";

export default class CreateOrder extends Component {
  state = {
    po: null,
    carrierID: ["S7138", "S8572", "S0671", "S8701"],
    ShipmentID: ["DO7119", "DO2884", "DO8425", "DO0873"],
    Truck_no: ["T001", "C041", "K301", "P314"],
    regulatorID: ["R001", "S001", "W001", "V001"],
    cid: null,
    shid: null,
    trno:null,
    regid: null,
    gtin: null,
    target: null,
    data: null,
    current: null,
    alert: false,
    success: null,
    dosts:"New Order",
    donumber:"XXX"
  };
  componentDidMount = () => {
    axios.get(`http://localhost:4000/api/alldata`).then((res) => {
      const persons = res.data;
      // console.log(persons);
      if(persons.data[0]){
      this.setState({ 
        data: persons,
        current: persons.data[0],
        po: persons.data[0].PONumber,
        cid:this.state.carrierID[0],
        shid:this.state.ShipmentID[0],
        trno:this.state.Truck_no[0],
        regid:this.state.regulatorID[0],
        
      })}
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
    this.setState({ [e.target.id]: e.target.value, current: item,dosts:"New Order",donumber:"XXX", alert: false });
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
      .post(`http://localhost:4000/api/createOrderBySupplier`, { ...user })
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        this.setState({ alert: true, success: true,dosts:"expecting confirmation from regulator",donumber:res.data.data.donumber });
      }).catch(
        this.setState({ alert: true, success: false })
        )
  };
  render() {
    // console.log(this.state);
    var a = this.state.current ? (
      <tr>
        <td>{this.state.current.ItemNumber}</td>
        <td>{this.state.current.Description}</td>
        <td>{this.state.current.Quantity}</td>
        {/* <td><div className="gtin-box">10614141999996</div> */}
        <td>
          <input
            type="number"
            onChange={this.handleChange}
            id="gtin"
            className="gtin-box"
            required="true"
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
  var DO_status = this.state.current ? (this.state.current.DoStatus ? this.state.current.DoStatus : this.state.dosts):this.state.dosts
    return (
      
      <div className="container box_margin">
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
              {this.state.current ? this.state.current.BuyerID : null}
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Location:
            </label>
            <div className="col-sm-6">
              {this.state.current ? this.state.current.ShipTo : null}
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Delivery date:
            </label>
            <div className="col-sm-6">
              {this.state.current ? this.state.current.DeliveryDue : null}
            </div>
          </div>
          <div className="table-responsive-md my-table">
            <table className="table table-bordered">
              <tr>
                <th>Delivery Order number</th>
                <th colspan="3">{`DO status: ${DO_status}`}</th>
              </tr>
              <tr>
    <td>{this.state.donumber}</td>
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
