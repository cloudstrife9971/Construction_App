import React, { Component } from "react";
import "../assets/common.css";

export default class customerPopup extends Component {
  render() {
    // console.log(this.props);
    if (this.props.data) {
      var dataArray = Object.entries(this.props.data);

      // console.log(dataArray)
      var a = dataArray.map((data, key) => {
        // console.log(data[0] +data[1])
        if (data[0] === "ForemenUpdate") {
          return null;
        }
        if (data[0] === "__v") {
          return null;
        }
        if (data[0] === "_id") {
          return null;
        }

        return (
          <tr key={key}>
            <td>{data[0]}</td>

            <td> {data[1]}</td>
          </tr>
        );
      });
    }

    return (
      <div>
        <div id="myModal" className={this.props.show ? "w3modal" : "hide"}>
          <div className="w3modal-content">
            <span className="w3close" onClick={this.props.click}>
              &times;
            </span>

            <table class="table table-bordered">
              <tbody>{this.props.data ? a : null}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
