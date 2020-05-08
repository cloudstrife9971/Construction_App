import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
import StockRealeaseForm from "./stockRealeaseForm"
export default class stockRealease extends Component {
  state = {
  };
 
  handleChange = (e) => {
    var value = e.target.value;
    var current = this.state.data.data.find((data) => {
      return data.RegulatorId === value;
    });
    this.setState({ current });
  };
  
  componentDidMount = () => {
    axios.get(`http://localhost:4000/api/alldata`).then((res) => {
      const persons = res.data;
      // console.log(persons.data[0]);
      this.setState({
        data: persons,
        // po: persons.data[0].PONumber,
      });
    });
  };
  render() {
    var list = this.state.data  ?( this.state.data.data.map((data) => {
      return <StockRealeaseForm {...data} />;
    })): null;
    return (
      <div className="container box">
      {list}
     </div>
    )
  }
}
