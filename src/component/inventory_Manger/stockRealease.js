import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
export default class stockRealease extends Component {
  state = {
    po: null,
    current: null,
    batchid: null,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      po: this.state.current.PONumber,
      ccorder: "expecting confirmation from regulator",
      conum: "0001",
      batchid: "b001",
      futs: "1540340000",
    };
    axios
      .post(`http://localhost:4000/api/stockRelease`, { user })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
      });
  };
  handleChange = (e) => {
    var value = e.target.value;
    var current = this.state.data.data.find((data) => {
      return data.RegulatorId === value;
    });
    this.setState({ current });
  };
  handleType = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    // console.log(this.state.what_for,this.state.desc )
  };
  componentDidMount = () => {
    axios.get(`http://localhost:4000/api/alldata`).then((res) => {
      const persons = res.data;
      // console.log(persons.data[0]);
      this.setState({
        data: persons,
        current: persons.data[0],
        po: persons.data[0].PONumber,
      });
    });
  };
  render() {
    console.log(this.state);
    var a = this.state.data ? (
      <tr>
        <td>{this.state.current.ItemNumber}</td>
        <td>{this.state.current.Description}</td>
        <td>{this.state.current.Amount}</td>
        <td>{this.state.current.GTIN}</td>
        <td>
          <input
            onChange={this.handleType}
            id="batchid"
            className="gtin-box col"
          />
        </td>
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
            <select class="form-control" onChange={this.handleChange}>
              {RegulatorID}
            </select>
          </div>
        </div>
        <div className="table-responsive-md my-table">
          <table className="table table-bordered">
            <tr>
              <th>Consumption Order number</th>
              <th colspan="4">CO status: created</th>
            </tr>
            <tr>
              <td>XXX</td>
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
        <button class="btn btn-primary" onClick={this.handleSubmit} type="submit">
          release
        </button>
      </div>
    );
  }
}
