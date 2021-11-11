import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import LoadingHOC from "../hoc/LoadingHOC";
import { useSelector, useDispatch } from 'react-redux';


const ContactList = (props) => {

    //const {contacts} = props.details;
    const contacts = useSelector(state=>state.Contact.contact);
    
    const renderContactList = contacts && contacts.map((contact)=>{
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

            {contacts.length !== 0 ? 
                (renderContactList) : 
                <h5>We are sorry no data available for now... Please do add details by clicking "Add Contact"</h5>}
                
        </div>
    )
}

export default LoadingHOC(ContactList);