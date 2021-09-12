import { useState, useEffect } from 'react';
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
    //spread operator to hold the previous array of objects 
    setContacts([...contacts, contact]);
  }

  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
