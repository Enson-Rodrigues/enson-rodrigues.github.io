import React, {useState, useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import CComponent from "../example/CComponent";
import FComponent from "../example/FComponent";


const ContactList = (props) => {
    console.log(props);
    const inputEle = useRef("");
    const [normalFlag, setNormalFlag] = useState(false);

    const deleteContactHandler = (id) => {
        console.log("contact list "+id);
        props.getContactId(id);
    }

    const getSearchTerm = () => {
        props.searchKeyword(inputEle.current.value)
    }

    const renderContactList = props.contacts.map((contact)=>{
        return (
            <>
                <ContactCard contactDetails={contact} 
                            deleteContactHandler={deleteContactHandler} 
                            key={contact.id} ></ContactCard>
            </>
        )
    })

    return (
        <div className="ui celled list">
            <hr/>
            <button  className="ui button blue" onClick={()=>setNormalFlag(!normalFlag)}>Toggle Class Component</button>
            {normalFlag ? <FComponent/>: ""}
            <hr/>

            <h2>Contact List
                <Link to="/add">
                    <button className="ui button blue right">Add Contact</button>
                </Link>
            </h2>
            
            <div className="ui search">
                <div className="ui icon input">
                    <input 
                    ref={inputEle} type="text" 
                    placeholder="Search Contacts" className="prompt" 
                    value={props.searchTerm} 
                    onChange={getSearchTerm}/>
                    <i className="search icon"></i>
                </div>
            </div>
            {props.loading ? 
                (props.contacts.length != 0 ? 
                    (renderContactList) : 
                    <h5>We are sorry no data available for now... Please do add details by clicking "Add Contact"</h5>
                )
            
                :(props.errorMsgFlag ? <h3>Network Error, Sorry for inconviennce</h3>:<h1>Loading.....</h1>)}

            

        </div>
    )
}

export default ContactList;