import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
import Customertable from "./customerTable";
import CustomerPopup from "./customerPopup"

export default class Customer extends Component {
  state = {
    show: false,
    current: null,
    filterdata: null,
  };
  obj = {
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
  };
  handleClick = () => {
  
    if (this.state.show) {
      this.setState({ show: false });
    } else {
      // console.log("true")
      this.setState({ show: true });
    }
  };
  handleFilter = (data) => {
    // console.log(data);
    var filteredData = this.state.data.filter((param) => {
      return param.PONumber === data;
    });
    // console.log(filteredData[0])
    this.setState({ current: filteredData[0] });
  };
  componentDidMount = () => {
    axios.get(`http://localhost:4000/api/alldata`).then((res) => {
      const response = res.data;
      if (response.data) {
        let length = response.data.length;
        if (length > 0) {
          this.setState({
            data: response.data,
            empty: false,
            current: response.data[0],
          });
        } else {
          this.setState({ empty: true });
        }
      } else {
        this.setState({ empty: true });
      }
    });
  };
  handleChange = (e) => {
    var value = e.target.value;
    if(value.length===0){
      return null
    }
    // console.log(value)
    var filterData = this.state.data.filter((data) => {
      if (data.GTIN) {
        var check = data.GTIN.search(value);
        if (check === 0) {
          return true;
        }
      } else {
        return false;
      }
      return false
    });
    // console.log(filterData)
  
      this.setState({filterdata:filterData})

   
  };
  render() {
      // console.log(this.state)
    if (this.state.empty) {
      return (
        <div className="status-message text-secondary bg-light">
          <h1>No Orders From Buyer</h1>
        </div>
      );
    }
    var list = this.state.filterdata
      ? this.state.filterdata.map((data, key) => {
     
          // console.log(data)
          var value = { key };
          return (
            <Customertable
              click={this.handleClick}
              filter={this.handleFilter}
              {...data}
              id={value.key}
            />
          );
        })
      : null;

    return (
      <div className="container box_margin">
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Material GTIN:
          </label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
        </div>

        {list}

        <CustomerPopup
          data={this.state.current}
          show={this.state.show}
          click={this.handleClick}
        />
      </div>
    );
  }
}
