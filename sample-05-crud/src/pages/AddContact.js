import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const AddContact = (props) => {
    const [formValues, setFormValues] = useState({name: "", email: "", imageUrl: ""});
    const [formErrors, setFormErrors] = useState({});
    const [isFormSubmit, setIsFormSubmit] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const nameInput = React.useRef();
    const emailInput = React.useRef();

    const handleChange = (e) => {
        console.log("hit me");
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(handleValidate(formValues));
        setIsFormSubmit(true);
        console.log(formErrors);

        
    }

    const handleValidate = (param) => {
        // make a factory now so we will get only errors

        const errors = {};
        const regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;,.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*$/;

        if(!param.name) 
            errors.name = "Name field cannot be empty";
        
        if(!param.email) {
            errors.email = "Email field cannot be empty";
        } else if(!param.email.match(regex)) {
            errors.email = "Please add correct email address";
        }
            
        
        if(!param.imageUrl) 
            errors.imageUrl = "Please select an image";
        
        return errors;
    }

    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isFormSubmit) {
            console.log("form is valid");
            const frmdetails = {
                'name' : formValues.name,
                'email' : formValues.email,
                'imageUrl' : formValues.imageUrl
            }
            props.addContactHandler(frmdetails);
            nameInput.current.value=""; emailInput.current.value = "";
            setFormValues({name: "", email: "", imageUrl: ""});
            props.history.push("/");
        }
    }, [formErrors])

    const submitValue = (e) => {
        e.preventDefault();
        if(name === "") {
           console.log(e.target);
        }
        if(name === "" || email === "" ) { //|| image === null
            console.log("u cannot keep the input field empty")
            return;
        }
        const frmdetails = {
            'name' : name,
            'email' : email,
            'imageUrl' : image
        }
        props.addContactHandler(frmdetails);
        nameInput.current.value=""; emailInput.current.value = "";
        setName("");
        setEmail("");
        props.history.push("/");
    }

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(URL.createObjectURL(img));
        }
    };

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <pre>{JSON.stringify(formValues)}</pre>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" 
                        name="name" 
                        placeholder="Name"
                        value={formValues.name}
                        //onChange={e => setName(e.target.value)}
                        onBlur={handleChange}
                        onChange={handleChange}
                        ref={nameInput}
                    />
                    <p className="error">{formErrors.name}</p>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" 
                        name="email" 
                        value={formValues.email}
                        placeholder="E-mail"
                        //onChange={e => setEmail(e.target.value)}
                        onBlur={handleChange}
                        onChange={handleChange}
                        ref={emailInput}
                    />
                    <p className="error">{formErrors.email}</p>
                </div>
                <div className="field">
                    <label>Image</label>
                    <input type="file" 
                        name="imageUrl" 
                        //onChange={onImageChange}
                        onChange={handleChange}
                        value={formValues.imageUrl}
                    />
                    <p className="error">{formErrors.imageUrl}</p>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}

export default AddContact;