import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
import DisplayStatusForm from "./displayStatusForm"
export default class displayStatus extends Component {
  state = {
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
  componentDidMount = () => {
    axios.get(`http://localhost:4000/api/alldata`).then((res) => {
      const persons = res.data;
      // console.log(persons);
      // this.setState({ data: persons });
      if(persons.data[0]){
      this.setState({
        data: persons,
        current: persons.data[0],
        po: persons.data[0].PONumber,
      })}
    });
  };
  render() {
    var list = this.state.data  ?( this.state.data.data.map((data) => {
      return <DisplayStatusForm {...data} />;
    })): null;
    return (
      <div className="container box">
      {list}
     </div>
    );
  }
}
  