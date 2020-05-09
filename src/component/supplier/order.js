import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
import OrderForm from "./orderForm";
export default class Order extends Component {
  state = {
    filter: "all",
  };
  handleChange = (e) => {
    var value = e.target.value;
    if (value === "all") {
      this.setState({ filter: "all" });
      return this.componentDidMount();
    } else if (value === "Confirmed") {
      this.setState({ filter: "Inprocess" });
      return this.componentDidMount();
    } else if (value === "Rejected") {
      this.setState({ filter: "rejected" });
      return this.componentDidMount();
    }
  };
  componentDidMount = () => {
    axios.get(`http://localhost:4000/api/alldata`).then((res) => {
      const persons = res.data;
      // console.log(persons);
      // this.setState({ data: persons });
      this.setState({ data: persons });
    });
  };
  render() {
    var list = this.state.data
      ? this.state.data.data.map((data) => {
          // console.log(data.PoStatus)
          // if(data.PoStatus==="create"){
            // if(this.state.filter==="all"){
            //   return <OrderForm {...data} />;
            // }
          // if (data.PoStatus == this.state.filter) {
            return <OrderForm {...data} />;
          // }
          // }
        })
      : null;
    return (
      <div>
        {/* <div className="row form-group">
          <label htmlFor="" className="col-lg-2 col-form-label">
            Filter By Status
          </label>
          <div className="col-lg-5">
            <select
              class="form-control"
              onChange={this.handleChange}
              id="suppid"
            >
              <option>All</option>
              <option>Confirmed</option>
              <option>Rejected</option>
            </select>
          </div>
        </div> */}
        {list}
      </div>
    );
  }
}
