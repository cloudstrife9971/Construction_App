import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
export default class inventoryApprovalForm extends Component {
  state = {
    items: ["Cement", "Pipe"],
    input: null,
    GRStatus: null,
    alert: false,
    success: null,
    weght: null,
    innerdia: null,
    outerdia: null,
    wallwidth: null,
    dispute:false,
    disputeData:null
  };
  confirm = null;
  handleConfirm = () => {
    console.log("true");
    this.confirm = true;
  };
  handleDispute = () => {
    console.log("false");
    this.confirm = false;
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    // console.log(this.state.input);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    var timestamp = Math.floor(new Date() / 1000)
    var grsts = this.confirm ? "received" : "backorder";

    // console.log(dost);
    const user =
      this.state.input === "Cement"
        ? {
            po: this.props.PONumber,
            dosts: "arrived",
            posts: "inStock",
            grsts: grsts,
            uts: timestamp,
            weght: this.state.weght,
          }
        : {
            po: this.props.PONumber,
            dosts: "arrived",
            posts: "inStock",
            grsts: grsts,
            uts: timestamp,
            weght: this.state.weght,
            innerdia: this.state.innerdia,
            outerdia: this.state.outerdia,
            wallwidth: this.state.wallwidth,
          };

    axios
      .post(`http://localhost:4000/api/inventoryApproval`, { ...user })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        grsts === "received"
          ? this.setState({
              dosts: res.data.dosts,
              alert: true,
              success: true,
              GRStatus: grsts,
            })
          : this.setState({ alert: true, success: false });
      })
      .catch((error) => {
        // console.log(error.response);
        this.setState({dispute:true,disputeData:error.response.data.data})
      });
  };
  conditionDisplay = () => {
    switch (this.state.input) {
      case "Cement":
        return (
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
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
  componentDidMount = () => {
    // console.log(this.props.DoStatus)
    this.setState({
      input: this.state.items[0],
      GRStatus: this.props.GRStatus,
    });
  };
  render() {
    var errorMsg = this.state.dispute ?( <div className="alert text-danger bg-light">
    Error 500 : {this.state.disputeData} 
      </div>):(null)

  
    
    var a = (
      <tr>
        <td>{this.props.ItemNumber}</td>
        <td>{this.props.Description}</td>
        <td>{this.props.Quantity}</td>
        <td>{this.props.GTIN}</td>
      </tr>
    );
    var itemOptions = this.state.items.map((data) => {
      return <option>{data}</option>;
    });
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
    return (
      <div className="container box">
        <form action="" onSubmit={this.handleSubmit}>
          <div className="table-responsive-md my-table">
            <table className="table table-bordered">
              <tr>
                <td colspan="2">Goods Receipt number</td>
                <td colspan="2">{`GO status: ${this.state.GRStatus}`}</td>
              </tr>
              <tr>
                <td colspan="2">{this.props.GoodReceipt}</td>
                <th colspan="2">Items receipt</th>
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
            <label htmlFor="" className="col-sm-2 col-form-label">
              select Item to be inspected:
            </label>
            <div className="col-sm-6">
              <select class="form-control" id="input" onChange={this.handleChange}>
                {itemOptions}
              </select>
            </div>
          </div>
          <div>{this.conditionDisplay()}</div>
          {/* <div className="row form-group">
              <label htmlFor="" className="col-sm-3 col-form-label">
                Batch weight:
              </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row form-group">
              <label htmlFor="" className="col-sm-3 col-form-label">
                actual outside diameter:
              </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row form-group">
              <label htmlFor="" className="col-sm-3 col-form-label">
                average inside diameter:
              </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row form-group">
              <label htmlFor="" className="col-sm-3 col-form-label">
                pipe wall width thickness:
              </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row form-group">
              <label htmlFor="" className="col-sm-3 col-form-label">
                pipe weight:
              </label>
              <div className="col-sm-3">
                <input type="text" className="form-control" />
              </div>
            </div> */}
          <div className="row">
            <div className="col-sm-2">
              <button
                type="submit"
                class="btn btn-primary col"
                onClick={this.handleConfirm}
              >
                Confirm
              </button>
            </div>
            <div className="col-sm-2">
              <button
                class="btn btn-light col"
                type="submit"
                onClick={this.handleDispute}
              >
                Dispute
              </button>
            </div>
          </div>
        </form>
        {alert}
        {errorMsg}
      </div>
    );
  }
}
