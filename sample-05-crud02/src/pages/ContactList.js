import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import LoadingHOC from "../hoc/LoadingHOC";
import { useSelector, useDispatch } from 'react-redux';
import { useState, Profiler } from "react";


const ContactList = () => {

    const contacts = useSelector(state=>state.contactArrayList.contact);
    const [searchTerm, setSearchTerm] = useState("");

    const callBackFunct = (id, phase, actualDuration, baseDuration, startTime, commitTimme, interaction) => {
       /* console.log("id : "+id);
        console.log("phase : "+phase);
        console.log("actualDuration : "+actualDuration);
        console.log("baseDuration : "+baseDuration);
        console.log("startTime : "+startTime);
        console.log("commitTimme : "+commitTimme);
        console.log("interaction : "+JSON.stringify(interaction));*/
    }

    const renderContactList = contacts && contacts.filter((target)=>{
            return Object.values(target).slice(1,3)
                .join(" ").toLowerCase()
                .includes(searchTerm.toLowerCase());;
        })
        .map((contact)=>{
            console.log("Contact list listing");
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
            <Profiler id="contact-list" onRender={callBackFunct}>
                {contacts.length !== 0 ? 
                    (renderContactList) : 
                    <h5>We are sorry no data available for now... Please do add details by clicking "Add Contact"</h5>}
            </Profiler>
                
        </div>
    )
}

export default LoadingHOC(ContactList);