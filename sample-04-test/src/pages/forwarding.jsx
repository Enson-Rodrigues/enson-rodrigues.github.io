import React, { Component } from "react";
import CComponent from "../example/CComponent";
 
class Forwarding extends Component {
  constructor(){
    super();
    this.state = {
      firstName: "",
      normalFlag: false
    }
    console.log("Forward Parent Constructor");
  }

  componentDidMount() {
    console.log("Forward Parent componentDidMount");

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Forward Parent shouldComponentUpdate");
    
    console.log(this.state.firstName);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Forward Parent getSnapshotBeforeUpdate");
    console.log(this.state.firstName);
    return prevState;
  }

  componentDidUpdate() {
    console.log("Forward Parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Forward Parent componentWillUnmount");
  }

  render() {
    console.log("Forward Parent render");
    return (
      <>
      {this.state.firstName}
        <div className="text-center">
            <h1>Forwarding page</h1>
        </div>
        <br/>
            <br/>
            <br/>
            <hr/>
            <button  className="ui button blue" onClick={()=>this.setState({normalFlag: !this.state.normalFlag})}>Toggle Class Component</button>
            {this.state.normalFlag ? <CComponent/>: ""}
            <hr/>
      </>
    );
  }
}
 
export default Forwarding;