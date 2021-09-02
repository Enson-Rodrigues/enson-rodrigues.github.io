import React, { Component } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./customButton";
 
class Card extends Component {

  state = {
    cardDisplay: false
  }
  componentDidMount () {
    console.log(this.props.jobFullDetails);
  }
    
  render() {
    const details = this.props.jobFullDetails;
    return (
      <>
          {this.props.jobFullDetails.length ?
            <div className="text-center">
              <h1>Below {this.props.jobFullDetails.length === 1 ? "is" : "are"} the list of {this.props.jobTitle}</h1>
              {this.props.jobFullDetails.map(target=>(
                <div key={target.id} className="card" >
                  <img alt="dummy" src={target.avatar}/>
                  <h1>{target.name}</h1>
                  <p className="title">Job Type {target.jobtype}</p>
                  <Link to={"/forwarding" + target.id}>
                    <CustomButton 
                      ctaText="Read More"
                      customClass="skinCTA">
                    </CustomButton>
                  </Link>
                </div>
              ))}
            </div>
            : <h1>Sorry, No details for this Job Type</h1>
          }
      </>
    );
  }
}
 
export default Card;