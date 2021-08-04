import React from "react";
import "./App.css"
import Operator from "./Operator";
import Display from "./Display";
import Numbers from "./Numbers";
class App extends React.Component {

  state = {
    data: "",
    op: "",
    predata: ""
  }
  solve = () => {
    let fulldata = this.state.data;
    let operator = this.state.op;
    console.log(fulldata);
    console.log(operator);
    let arr = fulldata.split(operator);
    let first = Number(arr[0]);
    let second = Number(arr[1]);
    if (operator == "+") {
      this.setState({ predata: this.state.data });
      this.setState({ data: first + second, op: "" })
    }
    else if (operator == "-") {
      this.setState({ predata: this.state.data });
      this.setState({ data: first - second, op: "" })
    }
    else if (operator == "*") {
      this.setState({ predata: this.state.data });
      this.setState({ data: first * second, op: "" })
    }
    else if (operator == "/") {
      this.setState({ predata: this.state.data });
      this.setState({ data: first / second, op: "" })
    }
  }

  setoperator = (val) => {
    if (val == "+") {
      this.setState({ op: "+", data: this.state.data + "+" })
    }
    else if (val == "-") {
      this.setState({ op: "-", data: this.state.data + "-" })
    }
    else if (val == "*") {
      this.setState({ op: "*", data: this.state.data + "*" })
    }
    else if (val == "/") {
      this.setState({ op: "/", data: this.state.data + "/" })
    }
  }

  setnumber = (v) => {
    this.setState({ data: this.state.data + v })
  }

  setclear = () => {
    this.setState({ data: "", op: "", predata: "" })
  }

  render = () => {
    return (

      <div className="main" >
        <Display predata={this.state.predata} data={this.state.data} />
        <Operator setoperator={this.setoperator} />
        <Numbers solve={this.solve} setnumber={this.setnumber} setclear={this.setclear} />
      </div>


    )
  }

}

export default App;