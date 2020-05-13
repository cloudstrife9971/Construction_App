import React, { Component } from "react";
import OtherApprovalForm from "./otherApprovalForm";
import axios from "axios";

export default class otherApproval extends Component {
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
                  "expecting confirmation from regulator for pouring"
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
          <h1>Waiting For Order Submission By Foreman...</h1>
        </div>
      );
    }
    var list = this.state.data
      ? this.state.data.map((data) => {
          return <OtherApprovalForm {...data} />;
        })
      : null;
    return <div className="container box">{list}</div>;
  }
}
