import React, { Component } from "react";

class CComponent extends Component {
    constructor(props){
        super(props);
        console.log("Child Contructor");
        this.state ={
            message: "Class Component",
            time: new Date().toString()
        }
    }

    componentDidMount() {
        console.log("Child componentDidMount");
        setInterval(this.showDate, 1000);
    }

    shouldComponentUpdate(nextProps, nextState) {
    console.log("Child shouldComponentUpdate");
    return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Child getSnapshotBeforeUpdate");
    }

    componentDidUpdate() {
    console.log("Child componentDidUpdate");
    }

    componentWillUnmount() {
    console.log("Child componentWillUnmount");
    }

    showDate = () => {
        this.setState({time: new Date().toString()});
    }

    render() {
        console.log("Child render");
        return (
        <>
            <p>{this.state.message}</p>
            <p>{this.state.time}</p>
        </>
        );
    }
}
 
export default CComponent;