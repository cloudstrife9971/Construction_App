import React, { Component } from "react";
import InventoryApprovalForm from "./inventoryApprovalForm";
import axios from "axios";
export default class inventoryApproval extends Component {
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
              data.GRStatus === "expecting conformation from regulator" &&
              !(data.DoStatus === "arrived")
            );
          });
          if (filterData.length > 0) {
            this.setState({
              data: filterData,
              current: filterData[0],
              po: filterData[0].PONumber,
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
          <h1>Waiting For Inventory Manager To Create Good Reciept...</h1>
        </div>
      );
    }
    // console.log(this.state);
    var list = this.state.data
      ? this.state.data.map((data) => {
          return <InventoryApprovalForm {...data} />;
        })
      : null;

    return <div>{list}</div>;
  }
}
