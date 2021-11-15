import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateContactList } from "../redux/actions"
import { Link, useNavigate } from "react-router-dom";
import { uuid } from "uuidv4";

const AddContact = () => {
    const [formValues, setFormValues] = useState({name: "", email: "", imageUrl: ""});
    console.log(formValues);
    const [formErrors, setFormErrors] = useState({});
    const [isFormSubmit, setIsFormSubmit] = useState(false);
    const addDetailsDispatch = useDispatch();
    const navigate = useNavigate();

    const nameInput = React.useRef();
    const emailInput = React.useRef();
    console.log(nameInput);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
    }

    const blurChange = (e) => {
        //const name = Object.keys(handleValidate(e)).toString();
        //const myValue = Object.values(handleValidate(e)).toString();
        let name, myValue
        for (const [key, value] of Object.entries(handleValidate(e))) {
            name = key;
            myValue = value;
        }

        setFormErrors({...formErrors, [name]: myValue});
        console.log(formErrors);
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

        /*if(!param.name) 
            errors.name = "Name field cannot be empty";
        
        if(!param.email) {
            errors.email = "Email field cannot be empty";
        } else if(!param.email.match(regex)) {
            errors.email = "Please add correct email address";
        }*/

        const { name, value } = param.target || param;

        switch (name) {
            case 'name': 
              if(value == "" ) {
                errors.name = "firstName field cannot be blank";
              } else {
                errors.name = "";
              }
              break;
      
            case 'email': 
              if(value == "" ) {
                errors.email = "email field cannot be blank";
              } else if(!value.match(regex)) {
                errors.email = "Please enter correct email address !";
              } else {
                errors.email = "";
              }
            break;

            default:
              break;
          }
            
        
        /*if(!param.imageUrl) 
            errors.imageUrl = "Please select an image";*/
        return errors;
    }

    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isFormSubmit) {
            console.log("form is valid");
            const frmdetails = {
                'id': uuid(),
                'name' : formValues.name,
                'email' : formValues.email,
                'imageUrl' : formValues.imageUrl
            }
            addDetailsDispatch(updateContactList(frmdetails));
            nameInput.current.value=""; emailInput.current.value = "";
            setFormValues({name: "", email: "", imageUrl: ""});
            navigate("/");
        }
    }, [formErrors])


    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <pre>{JSON.stringify(formValues)}</pre>
            <pre>{JSON.stringify(formErrors)}</pre>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" 
                        name="name" 
                        placeholder="Name"
                        value={formValues.name}
                        //onChange={e => setName(e.target.value)}
                        onBlur={blurChange}
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
                        onBlur={blurChange}
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