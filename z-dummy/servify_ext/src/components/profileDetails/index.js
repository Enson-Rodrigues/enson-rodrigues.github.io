import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//import "./styles.scss";

class Home extends Component {
  state = {
    user: [],
  };

  componentDidMount() {
    (async () => {
      try {
        let id = this.props.match.params.user_id;
        let res = await axios.get(
          `https://5f231b740e9f660016d88d23.mockapi.io/api/users/${id}`
        );
        let user = res.data;
        this.setState({ user });
      } catch (e) {
        //...handle the error...
      }
    })();
  }
  render() {
    const { user } = this.state;
    return (
      <div className="container profileDetails">
        <Link to={"/"}>
          <h5 className="backbtn">Back</h5>
        </Link>
        <div className="col">
          <div className="card">
            <div className="card-content">
              <img alt={user.name} src={user.avatar} />
            </div>
            <div className="card-detail">
              <div>
                <h1>{user.name} </h1>
                <h3>{user.jobtype} </h3>
                <h4>
                  <span className="label">Email</span> <span>{user.email}</span>{" "}
                </h4>
                <h4>
                  <span className="label">Contact</span>{" "}
                  <span>{user.phoneno}</span>{" "}
                </h4>
                <h4>
                  <span className="label">Country</span>{" "}
                  <span>{user.country}</span>{" "}
                </h4>
                <h4>
                  <span className="label">State</span> <span>{user.state}</span>{" "}
                </h4>
                <h4>
                  <span className="label">City</span> <span>{user.city}</span>{" "}
                </h4>
                {/* <h4><span className="label">Job Description</span> <span>{user.jobdescription}</span> </h4> */}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Home;
