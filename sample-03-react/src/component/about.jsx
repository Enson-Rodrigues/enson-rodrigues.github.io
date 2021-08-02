import React, { Component } from "react";
import axios from "axios";
import data from "../data/employeeData.json"
 
let Loading = ()=>{
  return <div>
    <img alt="loader" className="loading" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/source.gif"/>
  </div>
}

class About extends Component {
  constructor(){
    super();
    this.state = {
      employee: [],
      isLoading: true
    }

    console.log(this.state);
  }

  render() {
    let loadingStructure;
      
    if(this.state.isLoading) {
      loadingStructure = <Loading></Loading>;
      console.log(loadingStructure);
    }

    return (
      <>
        <h2>Welcome to About page</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <h1>Employee Details (Parent component)</h1>
        {loadingStructure}
        {this.state.employee.map(target=>(
          <div key={target.id} className="card">
                <img alt="dummy" src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/IN/consumer-activation/protection.svg"/>
                <h1>{target.employee_name}</h1>
                <p className="title">Age {target.employee_age}, Employee id: {target.id}</p>
                <p className="title">Earnings ₹ {target.employee_salary}</p>
                <div style={{margin: "24px 0"}}>
                    <a href="foo"><i className="fa fa-dribbble"></i></a> 
                    <a href="foo"><i className="fa fa-twitter"></i></a>  
                    <a href="foo"><i className="fa fa-linkedin"></i></a>  
                    <a href="foo"><i className="fa fa-facebook"></i></a> 
                </div>
          </div>
        ))}
      </>
    );
  }

  componentDidMount() {
    var jsonFile = true;

    if(jsonFile) {
      setTimeout(() => { 
        this.setState({
          employee: data,
          isLoading: false
        });
      }, 10000);
    } else {
      this.employeeRawData();
    }
    
  }

  //componentWillUnmount() {
    //console.log("destroy the mount");
  //}

  employeeRawData = () => {
    axios.get(`http://dummy.restapiexample.com/api/v1/employees`).then(
      response  => {
        if(response.data.data !== 0) {
          this.setState({
            employee: response.data.data,
            isLoading: false
          });
        } else {

        }
      })

      .catch( function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
  }

}
 
export default About;