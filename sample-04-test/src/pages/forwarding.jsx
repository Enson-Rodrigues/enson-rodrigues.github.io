import React, { Component } from "react";
 
class Forwarding extends Component {
  constructor(){
    super();
    this.state = {
      firstName: ""
    }
    console.log(this);
    console.log("Constructor");
    console.log(this.state);
  }

  componentDidMount() {
    console.log("I am mounting");
    
    console.log(this.state.firstName="kk");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("I am shouldComponentUpdate");
    
    console.log(this.state.firstName);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("I am getSnapshotBeforeUpdate");
    console.log(this.state.firstName);
    return prevState;
  }

  componentDidUpdate() {
    console.log("I am componentDidUpdate");
    this.setState({firstName: "Wilson"});
    console.log(this.state.firstName);
  }

  componentWillUnmount() {
    console.log("I am componentWillUnmount");
  }

  render() {
    console.log("I am render");
    return (
      <>
      {this.state.firstName}
        <div className="text-center">
            <h1>Forwarding page</h1>
        </div>
      </>
    );
  }
}
 
export default Forwarding;