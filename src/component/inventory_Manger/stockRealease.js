import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
import StockRealeaseForm from "./stockRealeaseForm";
export default class stockRealease extends Component {
  state = {
    empty: false,
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
      const response = res.data;
      if (response.data) {
        let length = response.data.length;
        if (length > 0) {
          var filterData = response.data.filter((data) => {
            return data.ForemenUpdate[0]
              ? data.ForemenUpdate[0].ccorder === "created"
              : false;
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
    if (this.state.empty) {
      return (
        <div>
          <h1>Empty</h1>
        </div>
      );
    }
    var list = this.state.data
      ? this.state.data.map((data) => {
          return <StockRealeaseForm {...data} />;
        })
      : null;
    return <div className="container box">{list}</div>;
  }
}
