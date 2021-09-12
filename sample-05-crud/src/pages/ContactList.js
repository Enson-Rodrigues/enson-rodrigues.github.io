import React from "react";
import ContactCard from "../components/ContactCard";

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact)=>{
        return (
            <>
            <ContactCard contactDetails={contact}></ContactCard>
            </>
        )
    })

    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList;