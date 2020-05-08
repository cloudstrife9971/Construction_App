import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
export default class displayStatusForm extends Component {
  state = {
    po: null,
    ccorder:this.props.ForemenUpdate[0].ccorder
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      po: this.props.PONumber,
      ccorder: "expecting confirmation from regulator for pouring",
      conum: this.props.ForemenUpdate[0].conum,
      futs: "1540340000",
    };
    axios
      .post(`http://localhost:4000/api/displayOrderStatus`, {...user })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        this.setState({ccorder:"expecting confirmation from regulator for pouring"})
      });
  };
  render() {
    var a = this.state.data ? (
      <tr>
        <td>{this.state.current.ItemNumber}</td>
        <td>{this.state.current.Description}</td>
        <td>{this.state.current.Amount}</td>
      </tr>
    ) : null;
 
    return (
      <div className="container box_margin">
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Regulator ID:
          </label>
          <div className="col-sm-6">
            {/* <select class="form-control" id="exampleFormControlSelect1"> */}
              {this.props.RegulatorId}
            {/* </select> */}
          </div>
        </div>
        <div class="table-responsive-md my-table">
          <table className="table table-bordered">
            <tr>
              <td>Consumption Order number</td>
    <td colspan="2">{`CO status: ${this.state.ccorder}`}</td>
            </tr>
            <tr>
              <td>{this.props.ForemenUpdate[0].conum}</td>
              <td colspan="2">items to be consumed</td>
            </tr>
            <tr>
              <th>Item number</th>
              <th>Description</th>
              <th>Quantity</th>
            </tr>
            {a}
          </table>
        </div>
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Status:
          </label>
          <div className="col-sm-6">
            <input type="text" className="form-control" />
            {/* {this.state.current ? this.state.current.PoStatus : null} */}
          </div>
        </div>
        <button
          class="btn btn-primary"
          onClick={this.handleSubmit}
          type="submit"
        >
          submit
        </button>
      </div>
    );
  }
}
