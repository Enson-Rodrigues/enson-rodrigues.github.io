import React from "react";
import UserImage from "../assests/user.png"
import { render } from "react-dom";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    
    const {name, email, id} = props.contactDetails;
    //<Link to={{pathname:`/personal/${id}`, state: {contact: props.contactDetails}}}>
    return (
        <div className="item">
            <Link to={{pathname:`/contactlist/${id}`, state:{contact: props.contactDetails}}}>
                <img className="left floated ui avatar image" src={UserImage} alt="image"/>
                <div className="left floated content">
                    <div className="header">
                        {name}
                    </div>
                    <div>{email}</div>
                </div>
                </Link>    
                <div className="right floated content" style={{marginTop: "1%", color: "red"}}>
                    <i className="trash alternate outline icon" onClick={()=> props.deleteContactHandler(id)}></i>
                </div>
                                                                                      
        </div>
    )
}

export default ContactCard;