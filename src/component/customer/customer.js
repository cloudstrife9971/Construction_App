import React, { Component } from "react";
import "../assets/common.css";
export default class Customer extends Component {
  render() {
    return (
      <div className="container box">
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
          Material GTIN:
          </label>
          <div className="col-sm-4">
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
    );
  }
}
