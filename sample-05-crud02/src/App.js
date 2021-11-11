//Base page should be clean 
import './App.css';
import http from './api';
import { getContactList } from "./redux/actions"
import CustomRouter from './router';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [errorMsgFlag, setErrorMsgFlag] = useState(false);  
  const customDispatch = useDispatch();

  const getContacts = async () => {
    let response = await http.get("/contacts");
    setLoadingFlag(true);
    return response.data;
  }

  /*useEffect(()=>{
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
  }, [])*/
  // we need to add this in diff file to dispatch action 
  useEffect(()=>{
      customDispatch(getContactList());
  }, [])

  return (
    <>
      <CustomRouter contacts={contacts} loadingFlag={loadingFlag} errorMsgFlag={errorMsgFlag}></CustomRouter>
    </>
  );
}

export default App;
