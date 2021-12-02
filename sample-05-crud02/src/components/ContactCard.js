import React, { useState } from "react";
import UserImage from "../assests/user.png";
import Modal from "./modalTemplate/Modal";
import { Link } from "react-router-dom";


const ContactCard = (props) => {
    //console.log(props);
    const [ isOpen, setIsOpen ] = useState(false);
    const [ clickData, setClickData ] = useState({});
    const { email, id, imageUrl, name} = props.contactDetails;

    const openModal = (data) => {
        console.log("modal open");
        setIsOpen(!isOpen);
        setClickData(data);
    }
    
    return (
        <div className="item" key={id}>             
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
                <i className="trash alternate outline icon" onClick={()=> openModal(props.contactDetails)}></i>
            </div>     
            <div className="right floated content" style={{marginTop: "1%", color: "blue"}}>
                <Link to={{pathname:"/edit", state:{contact: props.contactDetails}}}>
                    <i className="edit alternate outline icon" ></i>
                </Link>
            </div>
            <Modal isOpen={isOpen} modalType="deleteCard" setIsOpen={setIsOpen} data={clickData}></Modal>                                     
        </div>
    )
}

export default ContactCard;