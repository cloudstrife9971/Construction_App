import React, { Component } from "react";
import ApprovalForm from "./approvalForm";
import axios from "axios";
export default class approval extends Component {
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
          return <ApprovalForm {...data} />;
        })): null;
    return (
      <div className="container box">
       {list}
      </div>
    );
  }
}
