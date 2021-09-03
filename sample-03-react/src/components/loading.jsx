import React, { Component } from "react";
 
class Loading extends Component {
    constructor(){
        super();
        this.state = {
          imgURL: 'https://media.giphy.com/media/y1ZBcOGOOtlpC/source.gif'
        }
      }

    render() {
        return (
        <>
            <img alt="loader" className="loading" src={this.state.imgURL}/>
        </>
        );
    }
}
 
export default Loading;