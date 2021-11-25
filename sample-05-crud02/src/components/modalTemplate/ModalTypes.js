
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { deleteContactItemAPI, updateContactList } from "../../redux/actions"

// To delete the contact details 
export const AreYouSure = (data) => {
    const {id, name, email} = data.modalData;
    const deleteContactIdDispatch = useDispatch();

    const deleteContactHandler = (id) => {
        deleteContactIdDispatch(deleteContactItemAPI(id));
    }

    return (
        <>
            <h3>Are you sure to delete below info ?</h3>
            <p>{name} & {email}</p>
            <button onClick={()=> deleteContactHandler(id)} className="ui button blue left">Yes</button>
        </>
    )
}

// User enters the details through form
export const ThankYou = (data) => {
    const addDetailsDispatch = useDispatch();
    const navigate = useNavigate();
    const [timer, setTimer] = useState(5);

    useEffect(()=>{
        let myInterval;
        if(timer !== 0 ) {
            myInterval = setInterval(() => {
                setTimer(timer-1);
            }, 1000);
        }

        if(timer===0) {
            addDetailsDispatch(updateContactList(data.modalData));
            navigate("/");
        }

        return (() => {
            clearInterval(myInterval);
        })
        
    },[timer])

    return (
        <>
            <h2>Thanks for the information</h2>
            <p>Very soon you will be redirected to home page ... i.e. {timer}</p>
        </>
    )
}