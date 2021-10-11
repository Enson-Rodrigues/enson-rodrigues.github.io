import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const EditContact = (props) => {
    const {email, id, name} = props.location.state.contact;
    console.log(props);

    const [editName, setName] = useState(name);
    const [editEmail, setEmail] = useState(email);
    const nameInput = React.useRef();
    const emailInput = React.useRef();

    const submitValue = (e) => {
        e.preventDefault();
        if(editName === "") {
           console.log(e.target);
        }
        if(editName === "" || editEmail === "") {
            console.log("u cannot keep the input field empty");
            return;
        }
        const frmdetails = {
            'id': id,
            'name' : editName,
            'email' : editEmail
        }
        props.editContactHandler(frmdetails);
        nameInput.current.value=""; emailInput.current.value = "";
        setName("");
        setEmail("");
        props.history.push("/");
    }

    return (
        <div className="ui main">
            <h2>Edit Contact</h2>
            <form className="ui form" onSubmit={submitValue}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" 
                    name="name" 
                    placeholder="Name"
                    onChange={e => setName(e.target.value)}
                    value={editName}
                    ref={nameInput}
                    />
                    <p className="error">{}</p>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" 
                    name="email" 
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                    value={editEmail}
                    ref={emailInput}
                    />
                </div>
                <button className="ui button blue">Update</button>
            </form>
        </div>
    )
}

export default EditContact;