import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
import DisplayStatusForm from "./displayStatusForm";
export default class displayStatus extends Component {
  state = {
    empty: false,
  };
  componentDidMount = () => {
    axios.get(`http://localhost:4000/api/alldata`).then((res) => {
      const response = res.data;
      if (response.data) {
        let length = response.data.length;
        if (length > 0) {
          var filterData = response.data.filter((data) => {
            return data.ForemenUpdate[0]
              ? data.ForemenUpdate[0].ccorder === "ready to use"
              : false;
          });
          if (filterData.length > 0) {
            this.setState({
              data: filterData,
              current: filterData[0],
              po: filterData[0].PONumber,
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
    if (this.state.empty === true) {
      return (
        <div>
          <h1>Empty</h1>
        </div>
      );
    }
    var list = this.state.data
      ? this.state.data.map((data) => {
          return <DisplayStatusForm {...data} />;
        })
      : null;
    return <div className="container box">{list}</div>;
  }
}
