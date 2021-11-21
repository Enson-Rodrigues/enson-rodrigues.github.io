import React from 'react';
import useForms from '../forms';
import validate from '../forms/validateInfo'


const FormComponent = () => {
    const {values, errors, handleChange, handleBlur, handleSubmit } = useForms(validate);
    
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <pre>{JSON.stringify(values)}</pre>
            <pre>{JSON.stringify(errors)}</pre>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                        id="name"
                        name="name" 
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <p className="error">{errors.name}</p>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                        id="email"
                        name="email" 
                        value={values.email}
                        placeholder="E-mail"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <p className="error">{errors.email}</p>
                </div>
                <div className="field">
                    <label>Image</label>
                    <input type="file" 
                        name="imageUrl" 
                        //onChange={onImageChange}
                        onChange={handleChange}
                        value={values.imageUrl}
                    />
                    <p className="error">{errors.imageUrl}</p>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}

export default FormComponent;