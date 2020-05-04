import React, { Component } from "react";
import "../assets/common.css";

export default class CreateOrder extends Component {
  state = {
    carrierID: [5968237138, 4924238572, 8479400671, 3224248701],
    ShipmentID: [5569817119, 1407232884, 2282578425, 6915980873],
    regulatorID: [7777856284, 9354568715, 9513122318, 8546901869],
    supplierID: null,
    BuyerID: null,
    Truck_no: ["T001", "C041", "K301", "P314"],
    GTIN: null,
    target:null
  };
  componentDidMount = () => {
    this.setState({
      data: {
        status: 200,
        data: [
          {
            Quantity: null,
            _id: "5eaa97ae0ea8032a278d7420",
            ForemenUpdate: [
              {
                foreid: "FOOO1",
                purps: null,
                fdec: "same as desc",
                ccorder: "ready to be poured",
                conum: "0001",
                pquanty: 4,
                futs: "1540340000",
                batchid: "b001",
                weght: "1000",
                density: "2.03",
              },
            ],
            PONumber: "0361092279",
            PoStatus: "inStock",
            ItemNumber: "10001",
            itemName: "Cement",
            Description: "poatlad cement 40 kg",
            Amount: "1000",
            State: "Otawa",
            ShipTo: "C-30",
            DeliveryDue: "10-06-2020",
            BuyerID: "B0001",
            SupplierID: "S0001",
            CreateTs: "1503412332",
            UpdateTs: "1540343442",
            __v: 1,
            CarrierId: "S0001",
            DoStatus: "arrived",
            GTIN: "10614141999996",
            RegulatorId: "R001",
            ShipmentId: "DO0001",
            Truckno: "T001",
            ExpDate: "10-06-2020",
            GoodReceipt: "pending",
            InvMngId: "IM001",
            StockLocation: "zone1",
            GRStatus: "received",
          },
          {
            Quantity: null,
            _id: "5eabf498a5175f3d87a565bf",
            ForemenUpdate: [
              {
                _id: "5eabf5cfa5175f3d87a565c0",
                foreid: "FOOO1",
                purps: "for concreate making",
                fdec: "same as desc",
                ccorder: "ready to be poured",
                conum: "0001",
                pquanty: 4,
                futs: "1540340000",
                batchid: "b001",
                bweght: "1000",
                density: "2.03",
              },
            ],
            PONumber: "6966433878",
            PoStatus: "inStock",
            ItemNumber: "10002",
            itemName: "Cement",
            Description: "poatlad cement 40 kg",
            Amount: "1000",
            State: "Otawa",
            ShipTo: "C-30",
            DeliveryDue: "10-06-2020",
            BuyerID: "B0001",
            SupplierID: "S0001",
            CreateTs: "1503412332",
            UpdateTs: "1540343442",
            __v: 1,
            CarrierId: "S0001",
            DoStatus: "arrived",
            GTIN: "10614141999996",
            RegulatorId: "R001",
            ShipmentId: "DO0001",
            Truckno: "T001",
            ExpDate: "10-06-2020",
            GoodReceipt: "pending",
            InvMngId: "IM001",
            StockLocation: "zone1",
            GRStatus: "received",
          },
        ],
      },
    });
  };
  handleChange=(e)=>{

console.log("e.target")
  }
  render() {
    var a = (
      <tr>
        <td>268540</td>
        <td>QUIKRETE 40kg Portland Cement Type 10 F</td>
        <td>100</td>
        {/* <td><div className="gtin-box">10614141999996</div> */}
        <td>
          <input type="number" className="gtin-box" />
        </td>
        {/* </td> */}
      </tr>
    );
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
    var po_numbers = this.state.data ? (
      this.state.data.data.map((data)=>{
      return <option>{data.PONumber}</option>
      })
    ):null
    return (
      <div className="container box">
        <form action="">
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Carrier ID:
            </label>
            <div className="col-sm-6">
              <select class="form-control" id="exampleFormControlSelect1">
                {carrier_ids}
              </select>
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Shipment ID:
            </label>
            <div className="col-sm-6">
              <select class="form-control" id="exampleFormControlSelect1">
                {Shipment_ids}
              </select>
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Truck no:
            </label>
            <div className="col-sm-6">
              <select class="form-control" id="exampleFormControlSelect1">
                {Truck_no_ids}
              </select>
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Regulator ID:
            </label>
            <div className="col-sm-6">
              <select class="form-control" id="exampleFormControlSelect1">
                {regulatorID_ids}
              </select>
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              PO Number:
            </label>
            <div className="col-sm-6" >
              <select class="form-control" onClick={this.handelChange}>
              {po_numbers}
              </select>
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Buyer ID:
            </label>
            <div className="col-sm-6">
              <select class="form-control" id="exampleFormControlSelect1">
              
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
              <input type="email" className="form-control" />
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
      </div>
    );
  }
}
