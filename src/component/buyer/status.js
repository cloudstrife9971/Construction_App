import React, { Component } from "react";
import StatuTable from "./statuTable"
import axios from 'axios';
export default class Status extends Component {
  state= {

  }
  componentDidMount=()=>{
    axios.get(`http://localhost:4000/api/alldata`)
    .then(res => {
      const persons = res.data;
      this.setState({data:persons})
    })
  }
  render() {
    var list = this.state.data  ?( this.state.data.data.map((data) => {
      return <StatuTable {...data} />;
    })): null;
    return (
      <div className="container">
       {list}
      </div>
    )
  }
}
