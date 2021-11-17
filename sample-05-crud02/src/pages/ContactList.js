import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import LoadingHOC from "../hoc/LoadingHOC";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";


const ContactList = () => {

    const contacts = useSelector(state=>state.contactArrayList.contact);
    const [searchTerm, setSearchTerm] = useState("");
    const renderContactList = contacts && contacts.filter((target)=>{
            return Object.values(target).slice(1,3)
                .join(" ").toLowerCase()
                .includes(searchTerm.toLowerCase());;
        })
        .map((contact)=>{
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

            <div className="ui search">
                <div className="ui icon input left">
                    <input 
                    type="text" 
                    placeholder="Search Contacts" className="prompt" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}/>
                    <i className="search icon"></i>
                </div>
                <button className="ui button blue right abc" onClick={(e)=> setSearchTerm("")}>Reset</button>
            </div>

            {contacts.length !== 0 ? 
                (renderContactList) : 
                <h5>We are sorry no data available for now... Please do add details by clicking "Add Contact"</h5>}
                
        </div>
    )
}

export default LoadingHOC(ContactList);