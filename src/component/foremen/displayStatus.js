import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
export default class displayStatus extends Component {
  state = {
    po: null,
    current: null,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      po: this.state.current.PONumber,
      ccorder: "expecting confirmation from regulator for pouring",
      conum: "0001",
      futs: "1540340000",
    };
    axios
      .post(`http://localhost:4000/api/displayOrderStatus`, { user })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
      });
  };
  componentDidMount = () => {
    axios.get(`http://localhost:4000/api/alldata`).then((res) => {
      const persons = res.data;
      // console.log(persons);
      // this.setState({ data: persons });
      this.setState({
        data: persons,
        current: persons.data[0],
        po: persons.data[0].PONumber,
      });
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
    var RegulatorID = this.state.data
      ? this.state.data.data.map((data) => {
          return <option>{data.RegulatorId}</option>;
        })
      : null;
    return (
      <div className="container box">
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Regulator ID:
          </label>
          <div className="col-sm-6">
            <select class="form-control" id="exampleFormControlSelect1">
              {RegulatorID}
            </select>
          </div>
        </div>
        <div class="table-responsive-md my-table">
          <table className="table table-bordered">
            <tr>
              <td>Consumption Order number</td>
              <td colspan="2">CO status: ready to use</td>
            </tr>
            <tr>
              <td>XXX</td>
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
            {/* <input type="text" className="form-control" /> */}
            {this.state.current ? this.state.current.PoStatus : null}
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
