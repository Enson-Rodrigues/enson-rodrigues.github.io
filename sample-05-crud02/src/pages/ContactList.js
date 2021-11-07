import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";

const ContactList = (props) => {

    const {contacts, errorMsgFlag, loadingFlag} = props.details;
    
    const renderContactList = contacts.map((contact)=>{
        return (
            <>
                <ContactCard key={contact.id.toString()} contactDetails={contact}/>
            </>
        )
    })

    return (
        <div className="ui celled list">
            <h2>Contact List
                <Link to="/add">
                    <button className="ui button blue right">Add Contact</button>
                </Link>
            </h2>

            {loadingFlag ? 
                (contacts.length !== 0 ? 
                    (renderContactList) : 
                    <h5>We are sorry no data available for now... Please do add details by clicking "Add Contact"</h5>
                )
                :(errorMsgFlag ? <h3>Network Error, Sorry for inconviennce</h3>:<h1>Loading.....</h1>)
            }

        </div>
    )
}

export default ContactList;