import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
export default class stockRealeaseForm extends Component {
  state = {
    batchid: null,
    conum:"XXX",
    ccorder:"created"
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      po: this.props.PONumber,
      ccorder: "expecting confirmation from regulator",
      batchid: "b001",
      futs: "1540340000",
      conum:this.props.ForemenUpdate[0].conum
    };
    axios
      .post(`http://localhost:4000/api/stockRelease`, { ...user })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        this.setState({  ccorder : "expecting confirmation from regulator"})
 
      });
  };
  handleType = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    // console.log(this.state.what_for,this.state.desc )
  };
  render() {
    // console.log(this.props.ForemenUpdate[0]);
    var a = (
      <tr>
        <td>{this.props.ItemNumber}</td>
        <td>{this.props.Description}</td>
        <td>{this.props.Amount}</td>
        <td>{this.props.GTIN}</td>
        <td>
          <input
            onChange={this.handleType}
            id="batchid"
            className="gtin-box col"
            required="true"
          />
        </td>
      </tr>
    );
    // var RegulatorID = this.state.data
    //   ? this.state.data.data.map((data) => {
    //       return <option>{data.RegulatorId}</option>;
    //     })
    //   : null;
    return (
      <div className="container box">
         <form action="" onSubmit={this.handleSubmit}>
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Regulator ID:
          </label>
          <div className="col-sm-6">{this.props.RegulatorId}</div>
        </div>
        <div className="table-responsive-md my-table">
          <table className="table table-bordered">
            <tr>
              <th>Consumption Order number</th>
    <th colspan="4">{`CO status: ${this.state.ccorder}`}</th>
            </tr>
            <tr>
    <td>{this.props.ForemenUpdate[0]?(this.props.ForemenUpdate[0].conum):null}</td>
              <td colspan="4">items to be consumed</td>
            </tr>
            <tr>
              <th>Item number</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>GTIN</th>
              <th>BatchID</th>
            </tr>
            {a}
          </table>
        </div>
        <button
          class="btn btn-primary"
        
          type="submit"
        >
          release
        </button>
        </form>
      </div>
    );
  }
}
