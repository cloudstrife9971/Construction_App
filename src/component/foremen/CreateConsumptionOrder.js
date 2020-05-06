import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
export default class CreateConsumptionOrder extends Component {
  state = {
    po:null,
    current: null,
    what_for:null,
    desc:null
  };
  handleType =(e)=>{
this.setState({[e.target.id]:e.target.value})
console.log(this.state.what_for,this.state.desc )
  }
  handleChange=(e)=>{
var value = e.target.value;
var current = this.state.data.data.find((data)=>{
  return data.PONumber === value
})
this.setState({current  })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      po: this.state.current.PONumber,
      dosts: "arrived",
      posts: "inStock",
      grsts: "received",
      uts: "1540343442",
    };
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
      });
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
    // console.log(this.state)
    var a  = this.state.data ? (
      <tr>
        <td>{this.state.current.ItemNumber}</td>
        <td>{this.state.current.GTIN}</td>
        <td>{this.state.current.Description}</td>
        <td>
          <input className="gtin-box col"/>
        </td>
      </tr>
    ) : null;
    var po_number = this.state.data ? ( this.state.data.data.map((data)=>{
    return   <option>{data.PONumber}</option>
    })):null
    var InventoryManagerId = this.state.data ? ( this.state.data.data.map((data)=>{
      return   <option>{data.InvMngId}</option>
      
      })):null
      
    return (
      <div className="container box_margin">
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            What for:
          </label>
          <div className="col-sm-6">
            <input type="text" onChange={this.handleType} id="what_for" className="form-control" />
          </div>
        </div>
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            Description:
          </label>
          <div className="col-sm-6">
            <input type="text" onChange={this.handleType} id="desc" className="form-control" />
          </div>
        </div>
        <div className="row form-group">
          <label htmlFor="" className="col-sm-2 col-form-label">
            InventoryManager ID:
          </label>
          <div className="col-sm-6">
            <select class="form-control" id="exampleFormControlSelect1">
              {InventoryManagerId}
            </select>
          </div>
        </div>
        <div className="table-responsive-md my-table">
          <table className="table table-bordered">
            <tr>
              <th colspan="2">Consumption Order number</th>
              <th>CO status</th>
              <th>Date</th>
            </tr>
            <tr>
              <td colspan="2">XXX</td>
              <td>New order</td>
              <td>Date and time</td>
            </tr>
            <tr>
              <th>Select Item</th>
              <th>GTIN:</th>
              <th>
                <select class="form-control" onChange={this.handleChange}>
               {po_number}
                </select>
              </th>
              <th>
                <button type="button" class="btn btn-success col">
                  Add Item
                </button>
              </th>
            </tr>
            {a}
          </table>
        </div>
        <button
          class="btn btn-primary"
          onClick={this.handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </div>
    );
  }
}
