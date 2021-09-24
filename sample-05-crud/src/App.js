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
import api from '../src/api/contactAxio'

const App = () => {
  /*const contacts = [
    {
      id: "1",
      name: "Enson",
      email: "text@test.com"
    }, {
      id: "2",
      name: "Jason",
      email: "abc@dc.com"
    }
  ];*/
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    let response = await api.get("/contacts");
    return response.data;
  }

  useEffect(()=>{
    //const retriveContacts = JSON.parse(localStorage.getItem("contacts"));
    const retriveContacts = async () => {
      let allContacts = await getContacts();
      if(allContacts) setContacts(allContacts);
    } 
    retriveContacts();
    //if(retriveContacts) setContacts(retriveContacts);
  }, [])

  /*useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])*/

  const addContactHandler = (contact) => {
    
    //spread operator to hold the previous array of objects 
    setContacts([...contacts, {id: uuid(), ...contact}]);

  }

  const removeContactHandler = (id) => {
    console.log("app "+id);
    const newContacts = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContacts);
  }

  return (
    <div className="ui container">
      <Header/>
      <BrowserRouter>
        <Switch>
        <Route exact path="/" 
          render={(props) => (
            <ContactList {...props} contacts={contacts} getContactId={removeContactHandler}/>
          )}/>
          <Route exact path="/contactlist/:id" 
          render={(props)=>(
            <PersonalDetails {...props} commponent={PersonalDetails}/>
          )} />
          <Route exact path="/add" 
          render={(props)=>(
            <AddContact {...props} addContactHandler={addContactHandler}/>
          )} />
        </Switch>
        
          
      </BrowserRouter>
    </div>
  );
}

export default App;
