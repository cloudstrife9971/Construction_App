import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
import OrderForm from "./orderForm";
export default class Order extends Component {
  state = {};
  componentDidMount = () => {
    axios.get(`http://localhost:4000/api/alldata`).then((res) => {
      const order = res.data;
     
    });
    this.setState({
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
    });
  };
  render() {
    var list = this.state.data? (this.state.data.map((data) => {
      return <OrderForm {...data} />;
    })):null
    return <div>{list}</div>;
  }
}
