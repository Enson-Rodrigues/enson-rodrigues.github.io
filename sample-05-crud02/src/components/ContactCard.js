import React from "react";
import UserImage from "../assests/user.png";
import { Link } from "react-router-dom";
import { deleteContactItemAPI } from "../redux/actions"
import { useSelector, useDispatch } from 'react-redux';

const ContactCard = (props) => {
    //console.log(props);

    const {email, id, imageUrl, name} = props.contactDetails;
    const deleteContactIdDispatch = useDispatch();

    const deleteContactHandler = (id) => {
        deleteContactIdDispatch(deleteContactItemAPI(id));
    }
    
    return (
        <div className="item">             
            <Link to={{pathname:`/contactlist/${id}`, state:{contact: props.contactDetails}}}>
                <img className="left floated ui avatar image" src={imageUrl ? imageUrl :UserImage} alt="user"/>
                <div className="left floated content">
                    <div className="header">
                        {name}
                    </div>
                    <div>{email}</div>
                </div>
            </Link>    
            <div className="right floated content" style={{marginTop: "1%", color: "red"}}>
                <i className="trash alternate outline icon" onClick={()=> deleteContactHandler(id)}></i>
            </div>     
            <div className="right floated content" style={{marginTop: "1%", color: "blue"}}>
                <Link to={{pathname:"/edit", state:{contact: props.contactDetails}}}>
                    <i className="edit alternate outline icon" ></i>
                </Link>
            </div>                                        
        </div>
    )
}

export default ContactCard;