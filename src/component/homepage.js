import React, { Component } from "react";
import "./assets/common.css";
import icon from "./next.png";
export default class homepage extends Component {
  render() {
    return (
      <div className="container box custom-postiton">
        <div className="top-nav-container">
          <div className="top-nav">
            <h2>Supplier company</h2>
            <ul>
              <li>
                {" "}
                <a href="">
                  <img src={icon} className="icon" alt="" />
                  Supplier
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="/SupplierReceivedOrders">Received Orders</a>
                  </li>
                  <li>
                    <a href="/Supplier Create delivery Order">Create delivery Order</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="circle"></div>
        <div className="two-box-flex">
          <div className="top-nav">
            <h2>Customer</h2>
            <a href="/Customer">
              <img src={icon} className="icon" alt="" />
              Customer
            </a>
          </div>
          <div className="top-nav">
            <h2>Construction Company</h2>
            <ul>
              <li>
                <a href="">
                  <img src={icon} className="icon" alt="" />
                  Buyer
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="/Homepage">Create New Order</a>
                  </li>
                  <li>
                    <a href="/BuyerDisplayOrderStatus">Display Order Status</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">
                  <img src={icon} className="icon" alt="" />
                  General Manage
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="/GeneralManager">Create New Order</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">
                  <img src={icon} className="icon" alt="" />
                  Inventory Manager
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="/Regulator Create goods receipt"> Inventory Manger Create goods receipt</a>
                  </li>
                  <li>
                    <a href="/Inventory Manger Create goods receipt"> Inventory Manger Stock release</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">
                  <img src={icon} className="icon" alt="" />
                  Foremen
                </a>
                <ul className="dropdown">
                  <li>
                    <a href="/Regulator consumption Approval">Foremen Create Consumption Order</a>
                  </li>
                  <li>
                    <a href="/Foremen Create Consumption Order">Foremen Display orders status</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="down-nav-container">
          <div className="top-nav">
            <h2>Regulator</h2>
            <a href="/Regulator Logistics approval">
              <img src={icon} className="icon" alt="" />
              go to pre-delivery inspection
            </a>
            <a href="/Regulator Inventory approval">
              <img src={icon} className="icon" alt="" />
              go to pick up inspection
            </a>
            <a href="/Inventory Manger Stock release">
              <img src={icon} className="icon" alt="" />
              go to out-of-stock inspection
            </a>
            <a href="/Other Regulator Inventory approval">
              <img src={icon} className="icon" alt="" />
              go to consumption inspection
            </a>
          </div>
        </div>
      </div>
    );
  }
}
