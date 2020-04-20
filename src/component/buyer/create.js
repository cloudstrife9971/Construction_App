import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";

export default class Create extends Component {
  state = {
    materials: [],
    POnumber: null,
    input: null,
    material: null,
    ItemNo: null,
    description: null,
    quantity: null,
    unit_price: null,
    amount: null,
    state: null,
    shipTo: null,
    deliveryDue: null,
    buyerID: null,
    supplierID: null,
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    // console.log(this.state);
  };
  handleClick = () => {
    var product = this.state.materials.find((data) => {
      return data.description === this.state.input;
    });
    // console.log(product);
    this.setState({
      material: product,
      amount: product.unit_price,
    });
  };
  totalPrice = (e) => {
    var value = parseFloat(this.state.material.unit_price);
    // console.log(value);
    var totalPrice = Math.ceil(e.target.value * value);

    this.setState({ amount: totalPrice });
  };
  createPO = (e) => {
    e.preventDefault();
    var user = {
      POnumber: this.state.POnumber,
      material: {
        ItemNo: this.state.ItemNo,
        description: this.state.description,
        quantity: this.state.quantity,
        unit_price: this.state.unit_price,
        amount: this.state.amount,
      },
      state: "xyz",
      shipTo: this.state.shipTo,
      deliveryDue: this.state.deliveryDue,
      buyerID: this.state.buyerID,
      supplierID: this.state.supplierID,
    };
    console.log(user);
    axios.post(`https://postman-echo.com/post`, { user }).then((res) => {
      // console.log(res);
      // console.log(res.data);
    });
  };
  componentDidMount = () => {
    axios.get(`http://www.mocky.io/v2/5e9ccde730000049000a7fb1`).then((res) => {
      const data = res.data;
      this.setState({ materials: data, input: data[0].description });
    });
  };
  render() {
    // console.log(this.state)
    var selectData = this.state.materials.map((data, id) => {
      return <option key={id}>{data.description}</option>;
    });

    var addRow = this.state.material ? (
      <tr>
        <td>{this.state.material.ItemNo}</td>
        <td>{this.state.material.description}</td>
        <td>
          <input
            type="number"
            className="form-control"
            id="quantity"
            onClick={this.handleChange}
            onChange={this.totalPrice}
          />
        </td>
        <td>${this.state.material.unit_price}</td>
        <td>${this.state.amount}</td>
      </tr>
    ) : null;

    return (
      <div className="container box">
        <form action="" onClick={this.createPO}>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Supplier ID:
            </label>
            <div className="col-sm-6">
              <select
                class="form-control"
                onChange={this.handleChange}
                id="supplierID"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Ship to:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                id="shipTo"
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Delivery Due:
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                id="deliveryDue"
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div class="table-responsive-md my-table">
            <table className="table table-bordered">
              <tr>
                <th>Purchase Order number</th>
                <th>PO status</th>
                <th colspan="2">Date</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>XXX</td>
                <td>New order</td>
                <td colspan="2">Date and time</td>
                <td>$2531.52</td>
              </tr>
              <tr>
                <th>Select Item</th>
                <th>
                  <select
                    class="form-control"
                    id="input"
                    onChange={this.handleChange}
                  >
                    {selectData}
                  </select>
                </th>
                <th>
                  <button
                    type="button"
                    onClick={() => {
                      this.handleClick();
                    }}
                    class="btn btn-success col"
                  >
                    Success
                  </button>
                </th>
                <th>Unite price</th>
                <th>price</th>
              </tr>
              {addRow}
            </table>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <button type="button" class="btn btn-light col">
                Cancel
              </button>
            </div>
            <div className="col-sm-2">
              <button class="btn btn-primary col" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
