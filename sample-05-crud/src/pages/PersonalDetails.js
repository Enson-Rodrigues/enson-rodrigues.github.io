import React, {useEffect, useState, useRef, useMemo} from "react";
import UserImage from "../assests/user.png"
import { Link } from "react-router-dom";

const PersonalDetails = (props) => {
    console.log(props);
    /*
    1. DOM refrence
    2. useRef to store previous value 
    3. hold mutable value prevent re-rendering of component*/
    const previousCount = useRef("");
    const {email, id, name, imageUrl} = props.location.state.contact;
    const [inputName, setInputName]= useState("");
    const [counter, setCounter] = useState(0);
    const result = useMemo(()=>factorial(counter), [counter]);
    //const result = factorial(counter);
    
    useEffect(()=>{
        previousCount.current = counter;
    }, [counter])
    
    function generateRandomNumber() {
        setCounter(Math.ceil(Math.random()*100));
    }

    function factorial(n) {
        console.log("I am exeuted FACTORIAL");
        if(n < 0) {
            return -1;
        }
        if(n===0) {
            return 1;
        }
        return n * factorial(n-1);
    }

    const check= (e) => {
        console.log(e.target.value);
        setInputName(e.target.value);
    }

    return (
        <>
            
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={imageUrl ? imageUrl :UserImage} alt="image"/>
                    </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                        <a>Friends id no: {id}</a>
                    </div>
                    <div className="description">
                        {email}
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                    Joined in 2013
                    </span>
                    <span>
                    <i className="user icon"></i>
                    75 Friends
                    </span>
                </div>
                </div>
            </div>
            <br/>
            <Link to="/">
                <div className="ui button blue">Back to contact list</div>
            </Link>

            <br/><br/><br/><br/>
            <div className="ui icon input left">
                    <input 
                    type="text" 
                    placeholder="Search Contacts" className="prompt" 
                    value={inputName} onChange={(e)=>check(e)}/>
                </div>
            <h3>Random Counter: {counter}</h3>
            <h4>Previous Counter: {previousCount.current}</h4>
            <button  className="ui button blue" onClick={generateRandomNumber}>Generate Radom Number</button>
            <hr/>
            factorial of a number is {result}
            <hr/>
        </>       
    )
}

export default PersonalDetails;