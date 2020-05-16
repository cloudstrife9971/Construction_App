import React, { Component } from "react";
import axios from "axios";
import LogisticFrom from "./logisticForm";
export default class logistic extends Component {
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
            return ( 
              data.DoStatus === "expecting confirmation from regulator" &&
              !data.GoodReceipt
            );
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
    console.log(this.state);
    if (this.state.empty === true) {
      return (
        <div className="status-message text-secondary bg-light">
          <h1>No Orders From Supplier</h1>
        </div>
      );
    }
    var list = this.state.data
      ? this.state.data.map((data) => {
          return <LogisticFrom {...data} />;
        })
      : null;
    return <div>{list}</div>;
  }
}
