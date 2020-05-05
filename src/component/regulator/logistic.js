import React, { Component } from "react";
import axios from 'axios';
import LogisticFrom from "./logisticForm"
export default class logistic extends Component {
state ={

}
componentDidMount=()=>{
  axios.get(`http://localhost:4000/api/alldata`)
  .then(res => {
    const persons = res.data;
    this.setState({ data:persons });
  })
}
  render(){
var list = this.state.data ? (
  this.state.data.data.map((data)=>{
return (
  <LogisticFrom {...data}/>
)
  })
) :null
  return (
    <div>
    {list}
    </div>
  )
}
}
