import React, {useState} from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";


const ContactList = React.memo((props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        console.log("contact list "+id);
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact)=>{
        return (
            <>
            <ContactCard contactDetails={contact} deleteContactHandler={deleteContactHandler} key={contact.id} ></ContactCard>
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
            {renderContactList}
        </div>
    )
})

export default ContactList;