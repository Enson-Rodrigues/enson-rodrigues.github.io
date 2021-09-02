import React, { Component } from "react";
 
class CustomButton extends Component {
  render() {
    return (
      <>
        <a className={this.props.customClass}>{this.props.ctaText}</a>
      </>
    );
  }
}
 
export default CustomButton;