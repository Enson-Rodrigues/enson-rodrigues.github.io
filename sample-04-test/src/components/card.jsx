import React, { Component } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./customButton";
import Kid from "../assests/kid.jpg"
 
export default React.memo(class Card extends Component {

  constructor(props){
    super(props)

    this.state = {
      cardDisplay: false
    }
    console.log("Constructore");
  }

  componentDidMount () {
    console.log(this.props.jobFullDetails);
    console.log("did mount");
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
                  <img alt="kid" src={Kid}/>
                  <h1>{target.name}</h1>
                  <p className="title">Job Type {target.jobtype}</p>
                  <Link className="skinCTA" to={"/" + target.id}>
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
})