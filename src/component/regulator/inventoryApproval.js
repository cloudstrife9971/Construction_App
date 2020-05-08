import React, { Component } from "react";
import InventoryApprovalForm from "./inventoryApprovalForm";
import axios from "axios";
export default class inventoryApproval extends Component {
  state = {};
  componentDidMount = () => {
    axios.get(`http://localhost:4000/api/alldata`).then((res) => {
      const persons = res.data;
      // console.log(persons);
      // this.setState({ data: persons });
      this.setState({data:persons})
  })
}
render() {
  // console.log(this.state);
  var list = this.state.data  ?( this.state.data.data.map((data) => {
        return <InventoryApprovalForm {...data} />;
      })): null;
   
  return (
  <div>{list}</div>
  )
}
}
