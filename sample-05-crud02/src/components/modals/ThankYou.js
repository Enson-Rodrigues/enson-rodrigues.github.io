import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { updateContactList } from "../../redux/actions"

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