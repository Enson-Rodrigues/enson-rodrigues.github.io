import React, { Component } from "react";
import axios from "axios";
import deviceImage from "../assests/deviceImg.png"
import CustomDropdown from "../components/dropdown";
import Card from "../components/card";
import CComponent from "../example/CComponent";

export default React.memo(class Home extends Component {
  constructor(props){
    super(props);
    console.log("Parent Contructor");
  }

  state = {
    jobTypeList: [],
    job: "",
    jobFullDetails: {},
    isDataAvailable: false,
    cardDisplay: false,
    normalFlag: false
  }

  jobDetails = (params) => {
    console.log("job details");
    localStorage.setItem('jobType', params);

    this.setState({
      job: params || localStorage.getItem('jobType'),
      cardDisplay: true
    });

    ( async () => {
      try{ //https://5f231b740e9f660016d88d23.mockapi.io/api/users?jobtype=${params}
        let jobFullDetails = await axios.get(`http://localhost:4000/users?jobtype=${params}`);

        this.setState({
          jobFullDetails: jobFullDetails.data,
          isDataAvailable : jobFullDetails.data > 0
        })

      }catch{

      }
    })();
  }


  componentDidMount() {
    console.log("Parent ComponentDidMMount");
    console.log("test"+JSON.stringify(this.state));
    (
      async () => {
        console.log("executed");
        try { //https://5f231b740e9f660016d88d23.mockapi.io/api/usersJobtypes
          let response = await axios.get(`http://localhost:4000/usersJobtypes`);
          

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

          this.setState({ jobTypeList:  newfilteredResponse}, ()=>{console.log(this.state)});

        } catch {

        }
      }
    )();
    let check = localStorage.getItem('jobType');
    
    if(check != undefined && check != "" && check != null)
    this.jobDetails(check);
    console.log(check);
    
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
                  jobType={this.state.job}
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

<br/>
            <br/>
            <br/>
            <hr/>
            <button  className="ui button blue" onClick={()=>this.setState({normalFlag: !this.state.normalFlag})}>Toggle Class Component</button>
            {this.state.normalFlag ? <CComponent/>: ""}
            <hr/>
        
        <div className="deviceImage">
          <img alt="deviceImage" src={deviceImage} width="642" height="240"/>
        </div>
      </>
    );
  }
})