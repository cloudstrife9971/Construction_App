import React, { Component } from "react";
import ApprovalForm from "./approvalForm";
import axios from "axios";
export default class approval extends Component {
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
              ? data.ForemenUpdate[0].ccorder ===
                  "expecting confirmation from regulator"
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
    if (this.state.empty === true) {
      return (
        <div className="status-message text-secondary bg-light">
          <h1>Waiting for Inventory manager To Release The Stock...</h1>
        </div>
      );
    }
    // console.log(this.state);
    var list = this.state.data
      ? this.state.data.map((data) => {
          return <ApprovalForm {...data} />;
        })
      : null;
    return <div className="container box">{list}</div>;
  }
}
