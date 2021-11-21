import React, { Component } from "react";
import CComponent from "../example/CComponent";
 
class Forwarding extends Component {
  constructor(){
    super();
    this.state = {
      firstName: "",
      normalFlag: false,
      inputText: ""
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

  onHandler(event) {
    event.preventDefault();
    console.log("i got chnaged");
    console.log(event.target.value);
    this.setState({inputText: event.target.value});
  }

  render() {
    console.log("Forward Parent render");
    //<button  className="ui button blue" onClick={()=>this.setState({normalFlag: !this.state.normalFlag})}>Toggle Class Component</button>
    //{this.state.normalFlag ? <CComponent/>: <CComponent/>}
    return (
      <>
      {this.state.firstName}
        <div className="text-center">
            <h1>Forwarding page</h1>
        </div>
        <input 
          type="text" 
          placeholder="some type" 
          onChange={this.onHandler.bind(this)}/>
          {this.state.inputText}
        <br/>
            <br/>
            <br/>
            <hr/>
            
            <hr/>
      </>
    );
  }
}
 
export default Forwarding;