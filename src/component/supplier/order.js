import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
import OrderForm from "./orderForm";
export default class Order extends Component {
  state = {
    filter: "all",
    empty: false,
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
      const response = res.data;

      if (response.data) {
        let length = response.data.length;
        if (length > 0) {
          var filterData = response.data.filter((data) => {
            return data.PoStatus === "create";
          });
          if (filterData.length > 0) {
            this.setState({
              data: filterData,
              empty: false,
            });
          } else {
            this.setState({ empty: true });
          }
        } else {
          this.setState({ empty: true });
        }
      } else {
        this.setState({ empty: true });
      }

    });
  };
  render() {
    if (this.state.empty){
      return (
        <div>
          <h1>
            Empty
          </h1>
        </div>
      )
    }
    var list = this.state.data
      ? this.state.data.map((data) => {
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
