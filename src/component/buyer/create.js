import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";

export default class Create extends Component {
  state = {
    materials: [],
    POnumber: null,
    input: null,
    material: [],
    // ItemNo: null,
    // description: null,
    // quantity: null,
    // unit_price: null,
    amount: null,
    state: "New Order",
    shipTo: null,
    deliveryDue: null,
    buyerID: null,
    supplierID: null,
    dd: null,
    mm: null,
    yyyy: null,
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    // console.log(this.state);
  };
  handleAmount = (e) => {
    var id = e.target.id;
    var value = e.target.value;
    var updateMaterial = this.state.material;
    updateMaterial[id].quantity = value;
    this.setState({ material: updateMaterial });
    console.log(this.state.material[id].quantity);
  };
  handleClick = () => {
    var product = this.state.materials.find((data) => {
      return data.description === this.state.input;
    });
    var check = this.state.material.find((data) => {
      return data.ItemNo === product.ItemNo;
    });
    if (check) {
    } else {
      product.quantity = 1;
      var material = this.state.material;
      material.push(product);
      // console.log(product);
      this.setState({
        material: material,
        // amount: product.unit_price,
      });
    }
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
        // ItemNo: this.state.ItemNo,
        // description: this.state.description,
        // quantity: this.state.quantity,
        // unit_price: this.state.unit_price,
        // amount: this.state.amount,
      },
      state: "xyz",
      shipTo: this.state.shipTo,
      deliveryDue: this.state.deliveryDue,
      buyerID: this.state.buyerID,
      supplierID: this.state.supplierID,
    };
    // console.log(user);
    axios.post(`https://postman-echo.com/post`, { user }).then((res) => {
      // console.log(res);
      // console.log(res.data);
    });
  };
  componentDidMount = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    axios.get(`http://www.mocky.io/v2/5ea344484f0000cf6bd9f8d2`).then((res) => {
      const data = res.data;
      this.setState({
        materials: data,
        input: data[0].description,
        dd,
        mm,
        yyyy,
      });
    });
  };
  render() {
    // console.log(this.state.material)
    var total = 0;
    var totalAmount = this.state.material
      ? this.state.material.map((data) => {
          console.log(total);
          return Math.floor((total = total + data.quantity * data.unit_price));
        })
      : 0;

    var selectData = this.state.materials.map((data, id) => {
      return <option key={id}>{data.description}</option>;
    });

    var addRow =
      this.state.material !== []
        ? this.state.material.map((data, id) => {
            return (
              <tr>
                <td>{data.ItemNo}</td>
                <td>{data.description}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    className="form-control"
                    id={id}
                    onChange={this.handleAmount}
                    // onChange={this.totalPrice}
                  />
                </td>
                <td>${data.unit_price}</td>
                <td>${Math.floor(data.quantity * data.unit_price)}</td>
              </tr>
            );
          })
        : null;

    return (
      <div className="container box">
        <form action="" onClick={this.createPO}>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Supplier ID:
            </label>
            <div className="col-sm-4">
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
            <div className="col-sm-4">
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
            <div className="col-sm-4">
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
                <td>{this.state.state}</td>
                <td colspan="2">{`${this.state.dd} /${this.state.mm} /${this.state.yyyy}`}</td>
                <td>${totalAmount}</td>
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
                    Add Item
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
