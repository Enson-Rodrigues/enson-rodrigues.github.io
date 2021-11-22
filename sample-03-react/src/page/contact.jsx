import React, { Component } from "react";
import Form from "./form";
 
class Contact extends Component {
  constructor(){
    super();
    this.state = {
      toggle: false
    }
  }

  myClickProcess = (event) => {
    event.preventDefault();
    this.setState({toggle: !this.state.toggle});
  }

  render() {
    return (
      <>
        <h2>Welcome to Contact page</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <a href="#" onClick={this.myClickProcess}>Want to buy a new car?</a>
        {this.state.toggle ? <p>Call +11 22 33 44 now!</p>: ""}

        <Form/>
      </>
    );
  }
}
 
export default Contact;