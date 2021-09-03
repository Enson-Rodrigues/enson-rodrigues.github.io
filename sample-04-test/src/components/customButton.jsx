import React, { Component } from "react";

 
class CustomButton extends Component {
  render() {
    return (
      <>
          {this.props.ctaText}
      </>
    );
  }
}
 
export default CustomButton;