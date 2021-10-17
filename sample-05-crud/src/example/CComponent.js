import React, { Component } from "react";

class CComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            message: "Class Component",
            time: new Date().toString()
        }
    }

    componentDidMount() {
        console.log("Mount");
        setInterval(this.showDate, 1000);
    }

    componentDidUpdate() {
        console.log("Update");
    }

    componentWillUnmount() {
        console.log("I am from component unmount");
    }

    showDate = () => {
        this.setState({time: new Date().toString()});
    }

    render() {
        return (
        <>
            <p>{this.state.message}</p>
            <p>{this.state.time}</p>
        </>
        );
    }
}
 
export default CComponent;