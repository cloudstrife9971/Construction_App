import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
export default class displayStatusForm extends Component {
  state = {
    po: null,
    ccorder: this.props.ForemenUpdate[0]
      ? this.props.ForemenUpdate[0].ccorder
      : null,
    alert: false,
    success: null,
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
      .post(`http://localhost:4000/api/displayOrderStatus`, { ...user })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        this.setState({
          ccorder: "expecting confirmation from regulator for pouring", alert: true,
          success: true,
        });
      });
  };
  render() {
    var a = (
      <tr>
        <td>{this.props.ItemNumber}</td>
        <td>{this.props.Description}</td>
        <td>{this.props.ForemenUpdate[0].pquanty}</td>
      </tr>
    );
    var alert = this.state.alert ? (
      this.state.success ? (
        <div class="alert alert-success" role="alert">
          You have Submitted the order
        </div>
      ) : (
        <div class="alert alert-danger" role="alert">
          You have Rejected the order
        </div>
      )
    ) : null;
    return (
      <div className="container box">
        <form action="">
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 ">
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
                <th>Consumption Order number</th>
                <th colspan="2">{`CO status: ${this.state.ccorder}`}</th>
              </tr>
              <tr>
                <td>
                  {this.props.ForemenUpdate[0]
                    ? this.props.ForemenUpdate[0].conum
                    : null}
                </td>
                <th colspan="2">items to be consumed</th>
              </tr>
              <tr>
                <th>Item number</th>
                <th>Description</th>
                <th>Quantity</th>
              </tr>
              {a}
            </table>
          </div>
          {/* <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Status:
            </label>
            <div className="col-sm-6">
              <input type="text" className="form-control" required="true" /> */}
              {/* {this.state.current ? this.state.current.PoStatus : null} */}
            {/* </div>
          </div> */}
          <button
            class="btn btn-primary"
            onClick={this.handleSubmit}
            type="submit"
          >
            submit
          </button>
        </form>
        {alert}
      </div>
    );
  }
}
