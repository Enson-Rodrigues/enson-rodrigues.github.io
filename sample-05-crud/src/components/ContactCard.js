import React from "react";
import UserImage from "../assests/user.png"
import { render } from "react-dom";

const ContactCard = (props) => {
    
    console.log(props);

    return (
        <div className="item">
            <img className="left floated ui avatar image" src={UserImage} alt="image"/>
            <div className="left floated content">
                <div className="header">
                    {props.contactDetails.name}
                </div>
                <div>{props.contactDetails.email}</div>
                
            </div>
            <div className="right floated content" style={{marginTop: "1%", color: "red"}}>
                <i className="trash alternate outline icon" onClick={()=> props.deleteContactHandler(props.contactDetails.id)}></i>
            </div>                                                                              
        </div>
    )
}

export default ContactCard;