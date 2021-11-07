//Base page should be clean 

import './App.css';
import http from './api';
import CustomRouter from './router';
import { useState, useEffect } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [errorMsgFlag, setErrorMsgFlag] = useState(false);  

  const getContacts = async () => {
    let response = await http.get("/contacts");
    setLoadingFlag(true);
    return response.data;
  }

  useEffect(()=>{
    //const retriveContacts = JSON.parse(localStorage.getItem("contacts"));
    const retriveContacts = async () => {
      try {
        let allContacts = await getContacts();
        if(allContacts) setContacts(allContacts);
        
        console.log("Useeffect executed");
      } catch (e) {
        console.error(e.message);
        setErrorMsgFlag(true);
        setLoadingFlag(false);
      }
    }
    retriveContacts();
    //if(retriveContacts) setContacts(retriveContacts);
  }, [])

  return (
    <>
      <CustomRouter contacts={contacts} loadingFlag={loadingFlag} errorMsgFlag={errorMsgFlag}></CustomRouter>
    </>
  );
}

export default App;
