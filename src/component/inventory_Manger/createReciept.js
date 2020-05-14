import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class CreateReciept extends Component {
  state = {
    po: null,
    current: null,
    gis: null,
    startDate: new Date(),
    grept: "XXX",
    grst: "new order",
    alert: false,
    success: null,
  };
  handleDate = (date) => {
    // console.log(this.state.startDate);
    this.setState({
      startDate: date,
    });
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    // console.log(this.state.gis)
  };
  handlePoChange = (e) => {
    // console.log(e.target.value);
    var item = this.state.data.data.find((data) => {
      return data.PONumber === e.target.value;
    });
    // console.log(item);
    this.setState({ [e.target.id]: e.target.value, current: item });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      po: this.state.po,
      invmngid: "IM001",
      expdate: this.state.startDate,
      gis: this.state.gis,
      grsts: "pending",
      uts: "1540343442",
    };

    axios
      .post(`http://localhost:4000/api/invManagerReceipt`, { ...user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({
          grept: res.data.data.grept,
          grst: "expecting conformation from regulator",
          alert: true,
          success: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  componentDidMount = () => {
    axios.get(`http://localhost:4000/api/alldata`).then((res) => {
      const response = res.data;
      if (response.data) {
        let length = response.data.length;
        if (length > 0) {
          var filterData = response.data.filter((data) => {
            return data.DoStatus === "shipped" && !data.GoodReceipt;
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
    // console.log(this.state)
    if (this.state.empty) {
      return (
        <div className="status-message text-secondary bg-light">
          <h1>Waiting For Pre Delivery Inspection From Regulator...</h1>
        </div>
      );
    }
    var po_numbers = this.state.data
      ? this.state.data.map((data) => {
          return <option>{data.PONumber}</option>;
        })
      : null;

    var a = this.state.current ? (
      <tr>
        <td>{this.state.current.ItemNumber}</td>
        <td>{this.state.current.Description}</td>
        <td>{this.state.current.Quantity}</td>
        <td>{this.state.current.GTIN}</td>
      </tr>
    ) : null;
    var alert = this.state.alert ? (
      this.state.success ? (
        <div class="alert alert-success" role="alert">
          Goods Reciept Generated
        </div>
      ) : (
        <div class="alert alert-danger" role="alert">
          You have Rejected the order
        </div>
      )
    ) : null;
    return (
      <div className="container box">
        <form action="" onSubmit={this.handleSubmit}>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              PO number:
            </label>
            <div className="col-sm-6">
              <select
                class="form-control"
                onChange={this.handlePoChange}
                id="po"
              >
                {po_numbers}
              </select>
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              DO number:
            </label>
            <div className="col-sm-6">
              {/* <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select> */}
              {this.state.current ? this.state.current.PONumber : null}
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Carrier ID:
            </label>
            <div className="col-sm-6">
              {/* <input type="text" className="form-control" /> */}
              {this.state.current ? this.state.current.CarrierId : null}
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Location:
            </label>
            <div className="col-sm-6">
              {/* <input type="text" className="form-control" /> */}
              {this.state.current ? this.state.current.ShipTo : null}
            </div>
          </div>{" "}
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Delivery date:
            </label>
            <div className="col-sm-6">
              {/* <input type="text" className="form-control" /> */}
              {this.state.current ? this.state.current.DeliveryDue : null}
            </div>
          </div>{" "}
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Expected delivery data (same as delivery due at time of purchase):
            </label>
            <div className="col-sm-6">
              <DatePicker
                className="col"
                placeholderText="Click to select a date"
                selected={this.state.startDate}
                onChange={this.handleDate}
              />
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Buyer ID:
            </label>
            <div className="col-sm-6">
              {/* <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select> */}
              {this.state.current ? this.state.current.BuyerID : null}
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Shipment ID:
            </label>
            <div className="col-sm-6">
              {/* <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select> */}
              {this.state.current ? this.state.current.ShipmentId : null}
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Truck no:
            </label>
            <div className="col-sm-6">
              {/* <input type="text" className="form-control" /> */}
              {this.state.current ? this.state.current.Truckno : null}
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              Regulator ID:
            </label>
            <div className="col-sm-6">
              {/* <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select> */}
              {this.state.current ? this.state.current.RegulatorId : null}
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-sm-2 col-form-label">
              In stock location (GIS):
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                onChange={this.handleChange}
                id="gis"
                className="form-control"
                required="true"
              />
            </div>
          </div>
          <div className="table-responsive-md my-table">
            <table className="table table-bordered">
              <tr>
                <td colspan="2">Goods Receipt number</td>
                <td colspan="2">{`GR status: ${this.state.grst}`}</td>
              </tr>
              <tr>
                <td colspan="2">{this.state.grept}</td>
                <td colspan="2">Items receipt</td>
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
          <button class="btn btn-primary" id="Confirm" type="submit">
            Submit
          </button>
        </form>
        {alert}
      </div>
    );
  }
}
