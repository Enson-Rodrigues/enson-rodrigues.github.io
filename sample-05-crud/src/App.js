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

  useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem("contacts"));
    if(retriveContacts) setContacts(retriveContacts);
  }, [])

  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])

  const addContactHandler = (contact) => {
    console.log(contact);
    console.log(uuid());
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
          <Route exact path="/add" 
          render={(props)=>(
            <AddContact {...props} addContactHandler={addContactHandler}/>
          )} />
          {/*<AddContact addContactHandler={addContactHandler}/>
          <ContactList contacts={contacts} getContactId={removeContactHandler}/>*/}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
