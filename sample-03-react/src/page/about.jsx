import React, { Component } from "react";
import Loading from "../components/loading";
import PopUp from "../components/pop";
import axios from "axios";
import data from "../data/employeeData.json"

class About extends Component {

  constructor(){
    super();
    this.state = {
      employee: [],
      isLoading: true,
      popUpBoolean: false
    }

    console.log(this.state);
  }

  showPopUp = (param) => {
    this.setState({
      popUpBoolean: true,
      popUpData: param
    });
  }

  closePopUp = () => {
    this.setState({
      popUpBoolean: false
    });
  }

  render() {
    let loadingStructure, popUpStructure;
      
    if(this.state.isLoading) {
      loadingStructure = <Loading></Loading>;
    }

    if(this.state.popUpBoolean) {
      popUpStructure = <PopUp data={this.state.popUpData} call={this.closePopUp}></PopUp>;
    }

    return (
      <>
        <h2>Welcome to About page</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
        <h1>Employee Details (Parent component)</h1>
        {loadingStructure}
        {this.state.employee.map(target=>(
          <div key={target.id} className="card" onClick={()=>this.showPopUp(target)}>
                <img alt="dummy" src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/IN/consumer-activation/protection.svg"/>
                <h1>{target.employee_name}</h1>
                <p className="title">Age {target.employee_age}, Employee id: {target.id}</p>
                <p className="title">Earnings ??? {target.employee_salary}</p>
          </div>
        ))}
        {popUpStructure}
      </>
    );
  }

  componentDidMount() {
    let jsonFile = false;

    if(jsonFile) {
      setTimeout(() => { 
        this.setState({
          employee: data,
          isLoading: false
        });
        console.log(this.state.employee);
      }, 500);
      
    } else {
      this.employeeRawData();
    }
    
  }
  // Async, await 
  employeeRawData = () => {
    var that = this;
    //async
    /*axios.get(`http://dummy.restapiexample.com/api/v1/employees`).then(
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
  }*/
    /*try {
      // this parse may fail
      const data = await axios.get(`http://dummy.restapiexample.com/api/v1/employees`);
      console.log(data.data.data);
    } catch (err) {
      console.log(err);
    };*/

    // Promise way
    var jsonPromise = new Promise(function(resolve, reject) {
      // JSON.parse throws an error if you feed it some
      // invalid JSON, so this implicitly rejects:
      //resolve(axios.get(`http://dummy.restapiexample.com/api/v1/employees`));
      resolve(axios.get(`http://localhost:3000/employees_data`));
    });
    
    jsonPromise.then(function(data) {
      
      // This never happens:
      console.log("It worked!", data.data);
      that.setState({
        employee: data.data,
        isLoading: false
      });
      console.log(that.state.employee);
    }).catch(function(err) {
      // Instead, this happens:
      console.log("It failed!", err);
    })
  }
  
}
 
export default About;