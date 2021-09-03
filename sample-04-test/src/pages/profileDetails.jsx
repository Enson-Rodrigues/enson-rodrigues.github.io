import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
 
class ProfileDetails extends Component {
  constructor(props){
      super(props)

      this.state = {
          profileDetails: {}
      }
  }

  componentDidMount() {
      this.getProfileDetails();
  }

  getProfileDetails () {
    console.log(this.props.match.params.userId);
    let userId = this.props.match.params.userId;

      (async ()=> {
        try{
            let userIDDetails = await axios.get(`https://5f231b740e9f660016d88d23.mockapi.io/api/users/${userId}`);
            //console.log(userIDDetails.data);

            this.setState({
                profileDetails: userIDDetails.data
            })
            console.log(this.state);
        }catch{

        }
      })();
  }

  render() {
    return (
      <>
        <Link to={"/"}>
            <h4>Go Back</h4>
        </Link>
        {this.state.profileDetails != "undefined" ? 
            <div className="text-center">
                <div className="profileCard" >
                    <img alt="dummy" src={this.state.profileDetails.avatar}/>
                    <h1>{this.state.profileDetails.name}</h1>
                    <p className="title">Job Title: {this.state.profileDetails.title}</p>
                    <p className="title">Job Decription: {this.state.profileDetails.jobdescription}</p>
                    <p className="title">Job Desc: {this.state.profileDetails.desc}</p>
                    <p className="title">Job Type {this.state.profileDetails.jobtype}</p>
                    <p className="title">Job Phone No:  {this.state.profileDetails.phoneno}</p>
                    <p className="title">Job Email {this.state.profileDetails.email}</p>
                    <p className="title">Job State {this.state.profileDetails.state}</p>
                    <p className="title">Job Company {this.state.profileDetails.company}</p>
                    <p className="title">Job City {this.state.profileDetails.city}</p>
                    <p className="title">Job Created on {new Date(this.state.profileDetails.createdAt).toLocaleDateString('en-US', {weekday: "long", 
                        year: "numeric", 
                        month: "short", 
                        day: "numeric" })}</p>
                </div>
            </div>
        : ""}
        
      </>
    );
  }
}
 
export default ProfileDetails;