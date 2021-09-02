import React, { Component } from "react";
import axios from "axios";
import deviceImage from "../assests/deviceImg.png"
import CustomDropdown from "../components/dropdown";
import Card from "../components/card";

class Home extends Component {

  state = {
    jobTypeList: [],
    job: "",
    jobFullDetails: {},
    isDataAvailable: false
  }

  jobDetails = (params) => {
    console.log("job details");
    console.log(params);
    
    this.setState({
      job: params,
      cardDisplay: true
    });

    ( async () => {
      try{
        let jobFullDetails = await axios.get(`https://5f231b740e9f660016d88d23.mockapi.io/api/users?jobtype=${params}`);
        console.log(jobFullDetails.data);

        this.setState({
          jobFullDetails: jobFullDetails.data,
          isDataAvailable : jobFullDetails.data > 0
        })

      }catch{

      }
    })();
  }

  componentDidMount() {
    console.log("data initislised");
    (
      async () => {
        console.log("executed");
        try {
          let response = await axios.get("https://5f231b740e9f660016d88d23.mockapi.io/api/usersJobtypes");
          

          // filter the array by jobType
          let filteredResponse = response.data.filter((thing, index, self) => 
            index === self.findIndex((t) => (
              t.jobType === thing.jobType
            ))
          )
          
          // Sort the array of objects 
          let newfilteredResponse = filteredResponse.sort((a,b) =>
            //a.id - b.id
            a.jobType.localeCompare(b.jobType)
          )
          //console.log(newfilteredResponse);

          /*this.setState({
            jobType: filteredResponse
          })*/
          //console.log(this.state.jobType);
          this.setState({ jobTypeList:  newfilteredResponse}, ()=>{console.log(this.state)});

        } catch {

        }
      }
    )();
  }

  render() {
    return (
      <>
        <div className="text-center">
            <h1>You can search our employee based on search filter below</h1>
            <p>E & R welcomes you to explore more</p>
            <div className="container">
              <div className="form-controller">
                <label>Select the Job list from drop down</label>
                <CustomDropdown
                  jobs={this.state.jobTypeList}
                  label="Select the Job list from drop down"
                  callBack={this.jobDetails}
                />
              </div>
            </div>
        </div>
        {this.state.cardDisplay ? 
          <Card
          jobFullDetails = {this.state.jobFullDetails}
          jobTitle = {this.state.job}
        /> : ""
        }
        
        <div className="deviceImage">
          <img alt="deviceImage" src={deviceImage} width="642" height="240"/>
        </div>
      </>
    );
  }
}
 
export default Home;