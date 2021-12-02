import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditContact = () => {
    const [contactList, setContactList] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [loadingFlag, setLoadingFlag] = useState(false);
    const [errorFlag, setErrorFlag] = useState(false);

    useEffect(()=>{
        (async()=>{
            try {
                const response = await axios.get(`http://localhost:4000/contacts`)
                setContactList(response.data);
                setLoadingFlag(true);
            } 
            catch(e) {
                console.log(e);
                setErrorFlag(true);
            }
        })();
    }, [])

    const removeContact = (id) => {
        console.log("deleted called");
        console.log(id);
        const check = contactList.filter((item)=>{
            return item.id !== id;
        })
        console.log(check);
        setContactList(check);
    }

    const handler = (e) => {
        setFirstName(e.target.value);
    }

    const myStructure = contactList.filter((target)=>{
        return Object.values(target).slice(1,3).join(" ").toLowerCase().includes(firstName.toLowerCase());
    }).map((item)=>{
        return(
            <>
                <p key={item.id} onClick={()=>removeContact(item.id)}>{item.name}</p>
            </>
        )
    });

    return (
        <>
            <p className="h2">EditContact Section</p>
            {loadingFlag ? myStructure :(errorFlag ? <h2>Network Error please try after some time</h2>:<h2>Loading ...</h2>)}
            <input type="text" value={firstName} className="firstName" name="firstName" onChange={handler}/>
            <p>{firstName}</p>
        </>
    )
}

export default EditContact;