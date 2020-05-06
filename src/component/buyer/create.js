import React, { Component } from "react";
import "../assets/common.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Create extends Component {
  state = {
    po: "XXX",
    state: "New Order",
    startDate: new Date(),
    materials: [],
    input: null,
    material: null,
    dd: null,
    mm: null,
    yyyy: null,
    quan: 1,
    addr: null,
    delvry: null,
    buyerid: "null",
    suppid: null,
    cts: null,
    uts: null,
    amt: 0,
    alert: false,
    success: null,
    empty: false,
  };
  handleDate = (date) => {
    // console.log(this.state.startDate);
    this.setState({
      startDate: date,
    });
  };
  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({ [e.target.id]: e.target.value });
  };
  handleClick = () => {
    var product = this.state.materials.find((data) => {
      return data.desc === this.state.input;
    });

    this.setState({
      material: product,
      amt: product.uprice,
    });
  };
  totalPrice = (e) => {
    var value = parseFloat(this.state.material.uprice);
    // console.log(value);
    var totalPrice = Math.ceil(e.target.value * value);
    // var numToString = Number.String(totalPrice)
    this.setState({ amt: totalPrice });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.material === null) {
      return this.setState({empty:true})
    }
   
    var data = {
      posts: "create",
      itemNo: this.state.material.itemNo,
      itemname: this.state.material.itemname,
      desc: this.state.material.desc,
      quan: this.state.quan,
      uprice: this.state.material.uprice,
      state: "Created",
      addr: this.state.addr,
      delvry: this.state.startDate,
      buyerid: "B0001",
      suppid: "S0001",
      cts: "1503412332",
      uts: "1503412332",
      amt: this.state.amt,
    };
    // console.log(data);
    axios
      .post(`http://localhost:4000/api/purchaseOrder`, { ...data })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        this.setState({
          alert: true,
          success: true,
          po: res.data.data.po,
          state: res.data.data.posts,
          empty:false
        });
      })
      .catch(this.setState({ alert: true, success: false }));
  };
  componentDidMount = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    axios.get(`http://www.mocky.io/v2/5eb06edb3300006100c68e4d`).then((res) => {
      const data = res.data;
      // console.log("data");
      // console.log(data);
      this.setState({
        materials: data,
        input: data[0].desc,
        dd,
        mm,
        yyyy,
      });
    });
  };
  render() {
    // console.log(this.state.po);
    // const [startDate, setStartDate] = useState(new Date());
    // console.log(this.state.materials);

    var selectData = this.state.materials.map((data, id) => {
      return <option key={id}>{data.desc}</option>;
    });
    var addRow = this.state.material ? (
      <tr>
        <td>{this.state.material.itemNo}</td>
        <td>{this.state.material.desc}</td>
        <td>
          <input
            type="number"
            className="form-control"
            id="quan"
            onChange={(e) => {
              this.handleChange(e);
              this.totalPrice(e);
            }}
            // onClick={this.totalPrice}
          />
        </td>
        <td>${this.state.material.uprice}</td>
      </tr>
    ) : null;

    var alert = this.state.alert ? (
      this.state.success ? (
        <div class="alert alert-success" role="alert">
          Thank you your submission has been received
        </div>
      ) : (
        <div class="alert alert-danger" role="alert">
          Error - your submission has not been received
        </div>
      )
    ) : null;
    var empty =
      this.state.empty === true ? (
        <div class="alert alert-danger" role="alert">
          Please add an item in the cart
        </div>
      ) : null;

    return (
      <div className="container box_margin">
        <form action="" onSubmit={this.handleSubmit}>
          <div className="row form-group">
            <label htmlFor="" className="col-lg-2 col-form-label">
              Supplier ID:
            </label>
            <div className="col-lg-3">
              <select
                class="form-control"
                onChange={this.handleChange}
                id="suppid"
              >
                <option>6360326261</option>
                <option>0573584006</option>
                <option>8178861433</option>
                <option>8680432575</option>
                <option>3725272610</option>
              </select>
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-lg-2 col-form-label">
              Ship to:
            </label>
            <div className="col-lg-3">
              <input
                type="text"
                id="addr"
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="row form-group">
            <label htmlFor="" className="col-lg-2 col-form-label">
              Delivery Due:
            </label>
            <div className="col-lg-3">
              {/* <input
                type="date"
                id="deliveryDue"
                onChange={this.handleChange}
                className="form-control"
              /> */}
              <DatePicker
                className="col"
                placeholderText="Click to select a date"
                selected={this.state.startDate}
                onChange={this.handleDate}
              />
            </div>
          </div>

          <div class="table-responsive-md my-table">
            <table className="table table-bordered">
              <tr>
                <th>Purchase Order number</th>
                <th>PO status</th>
                <th>Date</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>{this.state.po}</td>
                <td>{this.state.state}</td>
                <td>{`${this.state.dd} /${this.state.mm} /${this.state.yyyy}`}</td>
                <td>${this.state.amt}</td>
              </tr>
              <tr>
                <th>Select Item</th>
                <th>
                  <select
                    class="form-control"
                    id="input"
                    onChange={this.handleChange}
                  >
                    {selectData}
                  </select>
                </th>
                <th>
                  <button
                    type="button"
                    onClick={() => {
                      this.handleClick();
                    }}
                    class="btn btn-success col"
                  >
                    Add Item
                  </button>
                </th>
                <th>Unite price</th>
                {/* <th>price</th> */}
              </tr>
              {addRow}
            </table>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <button type="button" class="btn btn-light col">
                Cancel
              </button>
            </div>
            <div className="col-lg-2">
              <button class="btn btn-primary col" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
        {alert}
        {empty}
        
      </div>
    );
  }
}
