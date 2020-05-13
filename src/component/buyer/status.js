import React, { Component } from "react";
import StatuTable from "./statuTable";
import axios from "axios";
export default class Status extends Component {
  state = {
    empty: false,
  };
  componentDidMount = () => {
    axios.get(`http://localhost:4000/api/alldata`).then((res) => {
      const response = res.data;
      if (response.data) {
        let length = response.data.length;
        if (length > 0) {
          this.setState({
            data: response.data,
            empty: false,
          });
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
        <div className="status-message text-secondary bg-light">
          <h1>No Orders From Buyer</h1>
        </div>
      );
    }
    var list = this.state.data
      ? this.state.data.map((data) => {
          return <StatuTable {...data} />;
        })
      : null;
    return <div className="container">{list}</div>;
  }
}
