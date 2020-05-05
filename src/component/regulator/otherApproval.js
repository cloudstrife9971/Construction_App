import React, { Component } from "react";
import OtherApprovalForm from "./otherApprovalForm"
import axios from "axios";;

export default class otherApproval extends Component {
  
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
  console.log(this.state);
  var list = this.state.data  ?( this.state.data.data.map((data) => {
        return <OtherApprovalForm {...data} />;
      })): null;
    return (
      <div className="container box">
      {list}
     </div>
    );
  }
}
