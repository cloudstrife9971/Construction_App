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
            <a href="">
              <img src={icon} className="icon" alt="" />
              Supplier
            </a>
          </div>
        </div>
        <div className="circle"></div>
        <div className="two-box-flex">
          <div className="top-nav">
            <h2>Customer</h2>
            <a href="">
              <img src={icon} className="icon" alt="" />
              Supplier
            </a>
          </div>
          <div className="top-nav">
            <h2>Construction Company</h2>
            <ul>
              <li>
                <a href="">
                  <img src={icon} className="icon" alt="" />
                  Supplier
                </a>
              <ul className="dropdown">
                <li>
                  <a href="">
                  Create New Order
                  </a>
                </li>
                <li>
                  <a href="">
                  Display Order Status
                  </a>
                </li>
              </ul>
              </li>
              <li>
                <a href="">
                  <img src={icon} className="icon" alt="" />
                  General Manage
                </a>
              </li>
              <li>
                <a href="">
                  <img src={icon} className="icon" alt="" />
                  Inventory Manager
                </a>
              </li>
              <li>
                <a href="">
                  <img src={icon} className="icon" alt="" />
                  Foremen
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="down-nav-container">
          <div className="top-nav">
            <h2>Regulator</h2>
            <a href="">
              <img src={icon} className="icon" alt="" />
              go to pre-delivery inspection
            </a>
            <a href="">
              <img src={icon} className="icon" alt="" />
              go to pick up inspection
            </a>
            <a href="">
              <img src={icon} className="icon" alt="" />
              go to out-of-stock inspection
            </a>
            <a href="">
              <img src={icon} className="icon" alt="" />
              go to consumption inspection
            </a>
          </div>
        </div>
      </div>
    )
  }
}
