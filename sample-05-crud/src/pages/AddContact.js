import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const AddContact = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const nameInput = React.useRef();
    const emailInput = React.useRef();

    const submitValue = (e) => {
        e.preventDefault();
        if(name === "") {
           console.log(e.target);
        }
        if(name === "" || email === "") {
            console.log("u cannot keep the input field empty")
            return;
        }
        const frmdetails = {
            'name' : name,
            'email' : email
        }
        props.addContactHandler(frmdetails);
        nameInput.current.value=""; emailInput.current.value = "";
        setName("");
        setEmail("");
        props.history.push("/");
    }

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={submitValue}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" 
                    name="name" 
                    placeholder="Name"
                    onChange={e => setName(e.target.value)}
                    ref={nameInput}/>
                    <p className="error">{}</p>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" 
                    name="email" 
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                    ref={emailInput}/>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}

export default AddContact;