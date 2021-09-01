import React, { Component } from "react";
import axios from "axios";

import CustomDropDown from "../../commonComponents/dropDown";
import Card from "../../commonComponents/card";
//import "./styles.scss";

class Home extends Component {
  state = {
    jobType: "",
    jobs: [],
    users: [],
    isDataAvailable : true
  };

  list = [
    {
      value: "Dropdown",
    },
    {
      value: "ABC",
    },
    {
      value: "New Value",
    },
  ];

  updateList = async (value) => {
    this.setState({
      jobType: value,
    })
      try {
        let res = await axios.get(`https://5f231b740e9f660016d88d23.mockapi.io/api/users?jobtype=${value}`);
        let users = res.data;
        let isDataAvailable = users.length>0;

        this.setState({ users, isDataAvailable }, ()=>{console.log(this.state)});
      } catch (e) {
        //...handle the error...
      }

    };
  componentDidMount() {
    (async () => {
      try {
        let res = await axios.get("https://5f231b740e9f660016d88d23.mockapi.io/api/usersJobtypes");
        let jobs = res.data;
        this.setState({ jobs }, ()=>{console.log(this.state)});
      } catch (e) {
        //...handle the error...
      }
    })();
  }
  render() {
    return (
      <div>
        <div className="container">
            <div className="form-controller">
              <CustomDropDown
                list={this.state.jobs}
                updateList={this.updateList}
                label="Search by Profession"
                classes="blue"
                value={this.jobType}
                fetchkey="name"
              />
            </div>

          <div className="usersWrapper"> 
            {
              this.state.isDataAvailable ? (
                this.state.users.map(item =>{
                return(

                  <Card item={item} key={item.id}/>
                )

              })):
              (
                <h2 style={{margin:'10px', textAlign:"center"}}>No result found!</h2>
              )
            
            }
            
          </div>
          
        </div>
      </div>
    );
  }
}

export default Home;
