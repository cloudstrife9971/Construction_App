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
import OtherApproval from "./regulator/otherApproval";
import CreateConsumptionOrder from "./foremen/CreateConsumptionOrder";
import StockRelease from "./inventory_Manger/stockRealease";
import Approval from "./regulator/approval";
import DisplayStatus from "./foremen/displayStatus";
import Customer from "./customer/customer";
import GeneralManager from "./general-manager/generalManager";
import Homepage from "./homepage";
export default class index extends Component {
  render() {
    return (
      <div>
        <div class="sidenav">
          <a href="/">Buyer Create New Order</a>
          <a href="/BuyerDisplayOrderStatus">Buyer Display Order Status</a>
          <a href="/SupplierReceivedOrders">Supplier Received Orders </a>
          <a href="/Supplier Create delivery Order">
            Supplier Create delivery Order
          </a>
          <a href="/Regulator Logistics approval">
            Regulator Logistics approval
          </a>
          <a href="Regulator Inventory approval">
            Regulator Inventory approval{" "}
          </a>
          <a href="Other Regulator Inventory approval">
            Other Regulator Inventory approval{" "}
          </a>
          <a href="/Inventory Manger Stock release">
            Regulator consumption Approval
          </a>
          <a href="/Regulator Create goods receipt">
            Inventory Manger Create goods receipt
          </a>
          <a href="/Inventory Manger Create goods receipt">
            Inventory Manger Stock release
          </a>

          <a href="/Regulator consumption Approval">
            Foreman create consumption order
          </a>
          <a href="/Foremen Create Consumption Order">
            Foremen Display orders status
          </a>
          <a href="/Customer">Customer</a>
          <a href="/GeneralManager">GeneralManager</a>
          
          <a href="/Homepage">Homepage</a>
          {/* <a href="/Foremen Display orders status">
            Foremen Display orders status
          </a> */}
        </div>
        <div class="main">
          <BrowserRouter>
            <Switch>
            <Route exact path="/Homepage" component={Homepage} />
              <Route exact path="/" component={Create} />
              <Route path="/BuyerDisplayOrderStatus" component={Status} />
              {/* <Route path="/CreateNewOrder" component={Create} /> */}

              <Route path="/SupplierReceivedOrders" component={Order} />
              <Route
                path="/Supplier Create delivery Order"
                component={CreateOrder}
              />
              <Route
                path="/Regulator Logistics approval"
                component={Logistic}
              />
              <Route
                path="/Regulator Inventory approval"
                component={InventoryApproval}
              />
              <Route
                path="/Other Regulator Inventory approval"
                component={OtherApproval}
              />
              <Route
                path="/Regulator Create goods receipt"
                component={CreateReciept}
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
              <Route path="/Customer" component={Customer} />
              <Route path="/GeneralManager" component={GeneralManager} />
              {/* <Route path="Foremen Display orders status" /> */}
            </Switch>
          </BrowserRouter>
          {/* <Homepage/> */}
          {/* <Test/> */}
          {/* <Create /> */}
          {/* <Status /> */}
          {/* <Order /> */}
          {/* <CreateOrder /> */}
          {/* <Logistic /> */}
          {/* <CreateReciept /> */}
          {/* <InventoryApproval /> */}
          {/* <CreateConsumptionOrder /> */}
          {/* <StockRelease /> */}
          {/* <Approval /> */}
          {/* <DisplayStatus /> */}
        </div>
      </div>
    );
  }
}
