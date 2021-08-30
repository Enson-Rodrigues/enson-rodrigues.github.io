import React, { useState } from "react";
import "./drawer.scss";

const Contact = () => {
    const [newEmployee, setNewEmployee] = useState({
        FirstName: "",
        LastName: "",
        email: "",
        dob: "",
    });

    const url = 'http://localhost:3100/data';
    const { FirstName, LastName, email, dob } = newEmployee;
    const [recordSuccess, setRecordSuccess] = useState('');
    const [age, setAge] = useState('');

    const getAge = (e) => {
        let empDob = Number(e.slice(0, 4));    
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();       
        let empAge = currentYear - empDob;
        setAge(empAge);
    }

    const onInputChange = e => {
        console.log('change Event-->', e.target.value, typeof e.target.value);
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
        
    };

    const onInputChangeApha = e => {
        console.log('change Event-->', e.target.value);
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });

        if (!e.target.value.match(/^[a-zA-Z]+$/)) {
            alert('Only alphabets are allowed please Remove U=Number');
            return false;
        }
        return true
    };


    const onSubmit = async e => {
        e.preventDefault();
        if (FirstName === '') {
            alert('Please Enter First Name');
        }
        if (LastName === '') {
            alert('Please Enter Last Name');
        }
        if (email === '') {
            alert('Please Enter Email');
        }
        if (dob === '') {
            alert('Please Enter Date of Birth');
        }
        if(FirstName != '' && LastName != '' && email != '' && dob != ''){
            getAge(dob);
            console.log(newEmployee);
            setRecordSuccess('Record Added Successfully')
            setTimeout(() => {
                setRecordSuccess('')
            }, 5000);
        }
    };

    return (
        <>
            <h3 className="success-message">{recordSuccess}</h3>
            <div className="container main-content">
                <div className="w-50 shadow p-5 mt-4">
                    <h2 className="text-center mb-4">Add A Employee</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your First Name"
                                name="FirstName"
                                onChange={e => onInputChangeApha(e)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Last Name"
                                name="LastName"
                                // value={LastName}
                                onChange={e => onInputChangeApha(e)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Your E-mail Address"
                                name="email"
                                // value={email}
                                onChange={e => onInputChange(e)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="date"
                                className="form-control form-control-lg"
                                placeholder="Enter Your E-mail Address"
                                name="dob"
                                // value={email}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <button className="btn btn-primary btn-block">Add Employee</button>
                    </form>
                </div>
                <div className=" p-5 mt-4">
                    <ul className="employee-input-details">
                        <li>
                            <h1>First Name:</h1>
                            <h2>{FirstName}</h2>
                        </li>
                        <li>
                            <h1>Last Name:</h1>
                            <h2>{LastName}</h2>
                        </li>
                        <li>
                            <h1>Email:</h1>
                            <h2>{email}</h2>
                        </li>
                        <li>
                            <h1>Age:</h1>
                            <h2>{age}</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};


export default Contact;