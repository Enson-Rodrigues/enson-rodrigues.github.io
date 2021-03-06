import React, {useState, useRef, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import CComponent from "../example/CComponent";
import FComponent from "../example/FComponent";
import CommonContext from "../context/CommonContext";

//Props are not passed from App.js since using useContext
const ContactList = (props) => {
    console.log(props);
    const inputEle = useRef("");
    
    // De structuring of object 
    const {loadingFlag, errorMsgFlag, searchTerm, setSearchTerm, searchHandler, removeContactHandler, myContacts, example} = useContext(CommonContext);
    
    console.log(useContext(CommonContext));

    useEffect(()=>{
        console.log("useEffect of contactlist.js executed");
    }, [])
    
    const [normalFlag, setNormalFlag] = useState(false);

    const deleteContactHandler = (id) => {
        console.log("contact list "+id);
        //props.getContactId(id);
        removeContactHandler(id);
    }

    const getSearchTerm = () => {
        //props.searchKeyword(inputEle.current.value)
        searchHandler(inputEle.current.value);
    }

    const reset = () => {
        console.log("reset");
        //inputEle.current.value = ""; // this is not a correct way we should update the state will see later
        setSearchTerm("");
        inputEle.current.focus();
        //props.searchKeyword("");
        searchHandler("");
    }
    const chnageText=()=>{
        return example = "Enson";
    }

    const renderContactList = myContacts().map((contact)=>{
        return (
            <>
                <ContactCard 
                    contactDetails={contact} 
                    deleteContactHandler={deleteContactHandler} 
                    key={contact.id}>
                </ContactCard>
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
                    ref={inputEle} type="text" 
                    placeholder="Search Contacts" className="prompt" 
                    value={searchTerm} 
                    onChange={getSearchTerm}/>
                    <i className="search icon"></i>
                </div>
                <button className="ui button blue right abc" onClick={reset}>Reset</button>
            </div>
            {loadingFlag ? 
                (myContacts().length != 0 ? 
                    (renderContactList) : 
                    <h5>We are sorry no data available for now... Please do add details by clicking "Add Contact"</h5>
                )
            
                :(errorMsgFlag ? <h3>Network Error, Sorry for inconviennce</h3>:<h1>Loading.....</h1>)}


            <br/>
            <br/>
            <br/>
            <hr/>
            <button  className="ui button blue" onClick={()=>setNormalFlag(!normalFlag)}>Toggle Class Component</button>
            {normalFlag ? <CComponent/>: ""}
            <hr/>
        </div>
    )
}

export default ContactList;