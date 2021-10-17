import React, {useState, useEffect} from "react";

const FComponent = () => {
    const [time, setTime] = useState(new Date().toString());
    const [msg, setMsg] = useState("Functional Component");

    const showDate = () => {
        setTime(new Date().toString());
    }

    useEffect(()=>{
        console.log("Component is mounted and updated");

        const interval = setInterval(showDate);

        return() => {
            console.log("cleared");
            clearInterval(interval);
        }

    }, [time])

    return (
        <>
            <br/><br/><br/><br/>
            <button  className="ui button blue" onClick={showDate}>Show Time</button>
            <p>{time}</p>
            <button  className="ui button blue" onClick={()=>setMsg("Change of message")}>Change Message</button>
            <p>{msg}</p>
        </>
    )

}

export default FComponent;