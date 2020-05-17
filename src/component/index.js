import React, { Component } from "react";
import "./assets/common.css";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
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
// import 'bootstrap/dist/css/bootstrap.min.css';
export default class index extends Component {
  state = {
    show: false,
  };
  handleClick = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <div class={`sidenav ${this.state.show ? "width" : null}`}>
            {/* <BrowserRouter> */}
            <Link to="/">Homepage</Link>
            <Link to="/CreateNewOrder">Buyer Create New Order</Link>
            <Link to="/BuyerDisplayOrderStatus">
              Buyer Display Order Status
            </Link>
            <Link to="/GeneralManager">GeneralManager</Link>
            <Link to="/SupplierReceivedOrders">Supplier Received Orders </Link>
            <Link to="/Supplier Create delivery Order">
              Supplier Create delivery Order
            </Link>
            <Link to="/Regulator Logistics approval">
            go to pre-delivery inspection
            </Link>
            <Link to="/Regulator Create goods receipt">
              Inventory Manger Create goods receipt
            </Link>
            <Link to="Regulator Inventory approval">
            go to pick up inspection
            </Link>
            <Link to="/Regulator consumption Approval">
              Foreman create consumption order
            </Link>
            <Link to="/Inventory Manger Create goods receipt">
              Inventory Manger Stock release
            </Link>
            <Link to="/Inventory Manger Stock release">
            go to out-of-stock inspection
            </Link>
            <Link to="/Foremen Create Consumption Order">
              Foremen Display orders status
            </Link>
            <Link to="Other Regulator Inventory approval">
            go to consumption inspection
            </Link>
            <Link to="/Customer">Customer</Link>
          </div>
          <div class={`main ${this.state.show ? "width" : null}`}>
            <div className="sidnavbtn">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={this.handleClick}
              >
                {this.state.show ? "Close Sidenav" : "Open Sidenav"}
              </button>
            </div>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/CreateNewOrder" component={Create} />
              <Route path="/BuyerDisplayOrderStatus" component={Status} />
              <Route path="/GeneralManager" component={GeneralManager} />
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
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
