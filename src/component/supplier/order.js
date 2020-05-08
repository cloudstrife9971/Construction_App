import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
import OrderForm from "./orderForm";
export default class Order extends Component {
  state = {};
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
          return <OrderForm {...data} />;
        // }
        })
      : null;
    return <div>{list}</div>;
  }
}
