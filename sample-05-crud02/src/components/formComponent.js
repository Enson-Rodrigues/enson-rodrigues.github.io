import React, { useState } from 'react';
import useForms from '../forms';
import validate from '../forms/validateInfo'
import { InputField } from '../form-components';
import { Link, useNavigate } from "react-router-dom";
import Modal from './modalTemplate/Modal';


const FormComponent = () => {
    const { isOpen, setIsOpen, values, errors, frmdetails, handleChange, handleBlur, handleSubmit, addImageBase64 } = useForms(validate);
    const navigate = useNavigate();

    const back = () => {
        navigate("/");
    }
    
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
            <form className="ui form">
                <div className="field">
                    <InputField 
                        id= "name"
                        type="text"
                        value={values.name}
                        placeholder="Name"
                        label="Name"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.name}
                    />
                </div>
                <div className="field">
                    <InputField 
                        id= "email"
                        type="text"
                        value={values.email}
                        placeholder="Email"
                        label="Email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors.email}
                    />
                </div>
                <div className="field">
                    <InputField 
                        id= "imageUrl"
                        type="file"
                        placeholder="image"
                        label="Please select an image"
                        name="imageUrl"
                        onChange={addImageBase64}
                        errors={errors.imageUrl}
                    />
                </div>
                <button onClick={back} className="ui button blue">Back</button>
                <button onClick={handleSubmit} className="ui button blue">Add</button>

                <Modal isOpen={isOpen} modalType="dataEntryDone" data={frmdetails} setIsOpen={setIsOpen}></Modal>
            </form>
        </div>
    )
}

export default FormComponent;