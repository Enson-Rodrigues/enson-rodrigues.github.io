import React, { Component } from "react";
import { Link } from "react-router-dom";
import Kid from "../assests/kid.jpg"
import axios from "axios";
 
export default React.memo(class ProfileDetails extends Component {
  constructor(props){
      super(props)

      this.state = {
          profileDetails: []
      }
  }

  componentDidMount() {
      this.getProfileDetails();
  }

  getProfileDetails () {
    console.log(this.props.match.params.userId);
    let userId = this.props.match.params.userId;

      (async ()=> { //http://localhost:4000/users?id=${userId}
        try{ //https://5f231b740e9f660016d88d23.mockapi.io/api/users/${userId}
            let userIDDetails = await axios.get(`https://5f231b740e9f660016d88d23.mockapi.io/api/users/${userId}`);
            //console.log(userIDDetails.data);

            this.setState({
                profileDetails: userIDDetails.data
            })
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
        {this.state.profileDetails ? 
            <div className="text-center">
                <div className="profileCard" >
                    <img alt="dummy" src={Kid}/>
                    <div className="fr">
                      <h1>{this.state.profileDetails.name}</h1>
                      <p className="title"><strong>Job Title:</strong> {this.state.profileDetails.title}</p>
                      <p className="title"><strong>Job Decription:</strong> {this.state.profileDetails.jobdescription}</p>
                      <p className="title"><strong>Job Desc:</strong> {this.state.profileDetails.desc}</p>
                      <p className="title"><strong>Job Type:</strong> {this.state.profileDetails.jobtype}</p>
                      <p className="title"><strong>Job Phone No:</strong>  {this.state.profileDetails.phoneno}</p>
                      <p className="title"><strong>Job Email:</strong> {this.state.profileDetails.email}</p>
                      <p className="title"><strong>Job State:</strong> {this.state.profileDetails.state}</p>
                      <p className="title"><strong>Job Company:</strong> {this.state.profileDetails.company}</p>
                      <p className="title"><strong>Job City:</strong> {this.state.profileDetails.city}</p>
                      <p className="title"><strong>Job Created on</strong> {new Date(this.state.profileDetails.createdAt).toLocaleDateString('en-US', {weekday: "long", 
                          year: "numeric", 
                          month: "short", 
                          day: "numeric" })}</p>
                    </div>
                </div>
            </div>
        : ""}
        
      </>
    );
  }
})