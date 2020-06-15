import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
export default class logisticForm extends Component {
  state = {
    items: ["Cement", "Pipe"],
    input: "Cement",
    dosts: null,
    alert: false,
    success: null,
    weght: null,
    innerdia: null,
    outerdia: null,
    wallwidth: null,
    dispute: false,
    disputeData: null,
  };

  handleSubmit = (e) => {
    // console.log("handleSubmit")
    e.preventDefault();
    // console.log(e.target);
    var timestamp = Math.floor(new Date() / 1000);
    const user =
      this.state.input === "Cement"
        ? {
            po: this.props.PONumber,
            dosts: "shipped",
            uts: timestamp,
            weght: this.state.weght,
          }
        : {
            po: this.props.PONumber,
            dosts: "shipped",
            uts: timestamp,
            weght: this.state.weght,
            innerdia: this.state.innerdia,
            outerdia: this.state.outerdia,
            wallwidth: this.state.wallwidth,
          };

    axios
      .post(`http://localhost:4000/api/logisticApproval`, { ...user })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);

        this.setState({
          dosts: res.data.data.dosts,
          alert: true,
          success: true,
        });
      })
      .catch((error) => {
        console.log(error.response);
        this.setState({ dispute: true, disputeData: error.response.data.data });
      });
  };
  handleDispute = () => {
    var data = {
      po: this.props.PONumber,
      posts: "create",
      uts: this.props.UpdateTs,
    };
    axios
      .post(`http://localhost:4000/api/supplierOrderCorrection`, { ...data })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);

        this.setState({
          dosts: res.data.data.dosts,
          alert: true,
          success: false,
        });
      })
      .catch((error) => {
        // console.log(error.response);
      });
  };
  handleChange = (e) => {
    // console.log(e.target.id);

    this.setState({ [e.target.id]: e.target.value });
  };
  componentDidMount = () => {
    this.setState({ input: this.state.items[0], dosts: this.props.DoStatus });
  };
  conditionDisplay = () => {
    switch (this.state.input) {
      case "Cement":
        return (
          <div className="row form-group">
            <label htmlFor="" className="col-sm-3 col-form-label">
              Batch weight:
            </label>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                required="true"
                onChange={this.handleChange}
                id="weght"
              />
            </div>
          </div>
        );
      case "Pipe":
        return (
          <div>
            <div className="row form-group">
              <label htmlFor="" className="col-sm-3 col-form-label">
                actual outside diameter:
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  required="true"
                  onChange={this.handleChange}
                  id="outerdia"
                />
              </div>
            </div>
            <div className="row form-group">
              <label htmlFor="" className="col-sm-3 col-form-label">
                average inside diameter:
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  required="true"
                  onChange={this.handleChange}
                  id="innerdia"
                />
              </div>
            </div>
            <div className="row form-group">
              <label htmlFor="" className="col-sm-3 col-form-label">
                pipe wall width thickness:
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  required="true"
                  onChange={this.handleChange}
                  id="wallwidth"
                />
              </div>
            </div>
            <div className="row form-group">
              <label htmlFor="" className="col-sm-3 col-form-label">
                pipe weight:
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  required="true"
                  onChange={this.handleChange}
                  id="weght"
                />
              </div>
            </div>
          </div>
        );

      default:
        break;
    }
  };
  render() {
    var alert = this.state.alert ? (
      this.state.success ? (
        <div class="alert alert-success" role="alert">
          You have Confirmed the order
        </div>
      ) : (
        <div class="alert alert-danger" role="alert">
          You have Disputed the order
        </div>
      )
    ) : null;
    var errorMsg = this.state.dispute ? (
      <div className="alert text-danger bg-light">
        Error 500 : {this.state.disputeData}
      </div>
    ) : null;
    //   console.log(this.props)
    // if (this.state.dispute === true) {
    //   return (
    //     <div className="alert text-danger bg-light">
    //       500 Error
    //     </div>
    //   );
    // }
    // console.log(this.state.input);
    var itemOptions = this.state.items.map((data) => {
      return <option>{data}</option>;
    });
    var a = (
      <tr>
        <td>{this.props.ItemNumber}</td>
        <td>{this.props.Description}</td>
        <td>{this.props.Quantity}</td>
        <td>{this.props.GTIN}</td>
      </tr>
    );

    return (
      <div className="container box">
        <form action="" onSubmit={this.handleSubmit}>
          <div class="table-responsive-md my-table">
            <table className="table table-bordered">
              <tr>
                <th colspan="2">Delivery Order number</th>
                <th colspan="2">{`DO status: ${this.state.dosts}`}</th>
              </tr>
              <tr>
                <td colspan="2"> {this.props.DoNumber}</td>
                <th colspan="2">Items</th>
              </tr>
              <tr>
                <th>Item number</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>GTIN</th>
              </tr>
              {a}
            </table>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-3 col-form-label">
              select Item to be inspected:
            </label>
            <div className="col-sm-3">
              <select
                class="form-control"
                onChange={this.handleChange}
                id="input"
              >
                {itemOptions}
              </select>
            </div>
          </div>
          <div>{this.conditionDisplay()}</div>
          <div className="row">
            <div className="col-sm-2">
              <button
                // onClick={this.handleConfirm}
                class="btn btn-primary col"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </div>
        </form>
        <div className="col-sm-2 cutom-position-relative">
          <div class="btn btn-light col" onClick={this.handleDispute}>
            Dispute
          </div>
        </div>
        {alert}
        {errorMsg}
      </div>
    );
  }
}
