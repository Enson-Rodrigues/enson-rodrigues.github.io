import { useState, useEffect } from 'react';
import {
  Route, Switch, // Switch is required to idetify the correct route
  BrowserRouter
} from "react-router-dom";
import { uuid } from "uuidv4";
import './App.css';
import Header from './components/Header';
import AddContact from './pages/AddContact';
import ContactList from './pages/ContactList';
import PersonalDetails from './pages/PersonalDetails';
import EditContact from './pages/EditContacts';
import api from '../src/api/contactAxio'

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [errorMsgFlag, setErrorMsgFlag] = useState(false);

  const getContacts = async () => {
    let response = await api.get("/contacts");
    setLoadingFlag(true);
    return response.data;
  }

  useEffect(()=>{
    //const retriveContacts = JSON.parse(localStorage.getItem("contacts"));
    const retriveContacts = async () => {
      try {
        let allContacts = await getContacts();
        if(allContacts) setContacts(allContacts);
      } catch (e) {
        console.error(e.message);
        setErrorMsgFlag(true);
        setLoadingFlag(false);
      }
    } 
    retriveContacts();
    //if(retriveContacts) setContacts(retriveContacts);
  }, [])

  /*useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])*/

  const addContactHandler = async (contact) => {
    console.log("Add executed");
    console.log(contact);
    const requestObject = {
      id: uuid(),
      ...contact
    }
    
    const response = await api.post('/contacts', requestObject)
    
    //spread operator to hold the previous array of objects 
    setContacts([...contacts, response.data]);
    

  }
  const searchHandler = (searchValue) => {
    setSearchTerm(searchValue);

    if(searchValue != "") {
      const searchContacts = contacts.filter((target)=>{
        return Object.values(target).slice(1,3)
                .join(" ").toLowerCase()
                .includes(searchValue.toLowerCase());
      });
      console.log(searchContacts);
      setSearchResult(searchContacts);
    } else {
      setSearchResult(contacts);
    }
  }

  const removeContactHandler = async (id) => {
    console.log("Remove executed");
    await api.delete(`/contacts/${id}`);

    // logic to delete the match frm array of objects
    const newContacts = contacts.filter((ele)=>{
      return ele.id !== id;
    });
    setContacts(newContacts);
  }

  const editContactHandler = async (contact) => {
    console.log("Edit executed");
    await api.put(`/contacts/${contact.id}`, contact);
    const newContacts =  await getContacts();
    setContacts(newContacts);
  }

  return (
    <div className="ui container">
      <Header/>
      <BrowserRouter>
        <Switch>
        <Route exact path="/" 
          render={(props) => (
            <ContactList {...props} contacts={searchTerm.length > 1 ? searchResult : contacts} 
            loading={loadingFlag} 
            errorMsgFlag={errorMsgFlag} 
            searchTerm={searchTerm} 
            searchKeyword={searchHandler} 
            getContactId={removeContactHandler}/>
          )}/>
          <Route exact path="/contactlist/:id" 
          render={(props)=>(
            <PersonalDetails {...props} commponent={PersonalDetails}/>
          )} />
          <Route exact path="/add" 
          render={(props)=>(
            <AddContact {...props} addContactHandler={addContactHandler}/>
          )} />
          <Route exact path="/edit" 
          render={(props)=>(
            <EditContact {...props} editContactHandler={editContactHandler}/>
          )} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
