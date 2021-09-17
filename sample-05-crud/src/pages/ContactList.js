import React from "react";
import ContactCard from "../components/ContactCard";

const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        console.log("contact list "+id);
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact)=>{
        return (
            <>
            {contact.id}
            <ContactCard contactDetails={contact} deleteContactHandler={deleteContactHandler} key={contact.id} ></ContactCard>
            </>
        )
    })

    return (
        <div className="ui celled list">
            <h2>Contact List</h2>
            {renderContactList}
        </div>
    )
}

export default ContactList;