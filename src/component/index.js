import React, { Component } from "react";
import "./assets/common.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Create from "./buyer/create";
import Status from "./buyer/status";
import Order from "./supplier/order";
import CreateOrder from "./supplier/createOrder";
import Logistic from "./regulator/logistic";
import CreateReciept from "./inventory_Manger/createReciept";
import InventoryApproval from "./regulator/inventoryApproval";
import CreateConsumptionOrder from "./foremen/CreateConsumptionOrder";
import StockRelease from "./inventory_Manger/stockRealease";
import Approval from "./regulator/approval";
import DisplayStatus from "./foremen/displayStatus";
import Homepage from "./homepage"
export default class index extends Component {
  render() {
    return (
      <div>
        {/* <div class="sidenav">
          <a href="/">Buyer Create New Order</a>
          <a href="/BuyerDisplayOrderStatus">Buyer Display Order Status</a>
          <a href="/SupplierReceivedOrders">Supplier Received Orders </a>
          <a href="/Supplier Create delivery Order">
            Supplier Create delivery Order
          </a>
          <a href="/Regulator Logistics approval">
            Regulator Logistics approval
          </a>
          <a href="/Regulator Create goods receipt">
            Regulator Create goods receipt
          </a>
          <a href="Regulator Inventory approval">
            Regulator Inventory approval{" "}
          </a>
          <a href="/Regulator consumption Approval">
            Regulator consumption Approval
          </a>
          <a href="/Inventory Manger Create goods receipt">
            Inventory Manger Create goods receipt
          </a>
          <a href="/Inventory Manger Stock release">
            Inventory Manger Stock release
          </a>
          <a href="/Foremen Create Consumption Order">
            Foremen Create Consumption Order
          </a> */}
          {/* <a href="/Foremen Display orders status">
            Foremen Display orders status
          </a> */}
        {/* </div> */}
        {/* <div class="main"> */}
          {/* <Create />
          <Status />
          <Order />
          <CreateOrder />
          <Logistic />
          <CreateReciept />
          <InventoryApproval />
          <CreateConsumptionOrder />
          <StockRelease />
          <Approval />
          <DisplayStatus /> */}
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/BuyerDisplayOrderStatus" component={Status} />
              <Route path="/SupplierReceivedOrders" component={Order} />
              <Route
                path="/Supplier Create delivery Order"
                component={CreateOrder}
              />
              <Route path="/Regulator Logistics approval" component={Logistic} />
              <Route
                path="/Regulator Create goods receipt"
                component={CreateReciept}
              />
              <Route
                path="/Regulator Inventory approval"
                component={InventoryApproval}
              />
              <Route
                path="/Regulator consumption Approval"
                component={CreateConsumptionOrder}
              />
              <Route
                path="/Inventory Manger Create goods receipt"
                component={StockRelease}
              />
              <Route
                path="/Inventory Manger Stock release"
                component={Approval}
              />
              <Route
                path="/Foremen Create Consumption Order"
                component={DisplayStatus}
              />
              {/* <Route path="Foremen Display orders status" component={Post} /> */}
            </Switch>
          </BrowserRouter>
        {/* </div> */}
      </div>
    );
  }
}
