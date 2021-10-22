import { useState, useEffect, useCallback, useReducer } from 'react';
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
import CommonContext from './context/CommonContext';

const customContact = (contacts, action) => {
  switch (action.type) {
    case "add":
      return contacts = [...contacts, action.payload];
    
    case "delete":
      let filterContacts = contacts.filter((ele)=>{
        return ele.id != action.payload;
      })
      return contacts = filterContacts;

    case "edit":
      return contacts = action.payload;

    case "initial data":
      return contacts = action.payload;
    
    case "search input":
      return contacts = action.payload;

    default:
      return console.log("default");
  }
}

const customSearchResult = (searchResult, action) => {
  switch(action.type) {
    case "filter search":
      return searchResult = action.payload.contacts.filter((target)=>{
        return Object.values(target).slice(1,3)
                .join(" ").toLowerCase()
                .includes(action.payload.searchValue.toLowerCase());
      });
    
    case "normal contacts":
      return searchResult = action.payload;

    default:
      return console.log("default");
  }
}

const App = () => {
  // "Reducer" best way to alter useState.
  // Also we can add the logics within reducer function
  // setContacts is replace with dispatch event to set state
  const [contacts, contactDispatch] = useReducer( customContact, []);
  const [searchResult, searchDispatch] = useReducer( customSearchResult, []);
  
  //const [contacts, setContacts] = useState(()=> {console.log("contacts 01"); return []});
  //const [searchResult, setSearchResult] = useState([]);
  console.log("App executed");
  
  const [searchTerm, setSearchTerm] = useState(()=> {console.log("search term 01"); return ""});
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [errorMsgFlag, setErrorMsgFlag] = useState(false);  

  const getContacts = async () => {
    let response = await api.get("/contacts");
    setLoadingFlag(true);
    return response.data;
  }

  /*const retriveContacts = useCallback(async () => {
    try {
      let allContacts = await getContacts();
      if(allContacts) setContacts(allContacts);
      console.log("I am hit everytym")
    } catch (e) {
      console.error(e.message);
      setErrorMsgFlag(true);
      setLoadingFlag(false);
    }
  }, [])*/

  useEffect(()=>{
    //const retriveContacts = JSON.parse(localStorage.getItem("contacts"));
    const retriveContacts = async () => {
      try {
        let allContacts = await getContacts();
        if(allContacts) contactDispatch({type: "initial data", payload: allContacts});
        //setContacts(allContacts);
        
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
    contactDispatch({type: "add", payload: response.data});

    //spread operator to hold the previous array of objects 
    //setContacts([...contacts, response.data]);
  }

  const searchHandler = (searchValue) => {
    setSearchTerm(searchValue);

    if(searchValue != "") {
      /*const searchContacts = contacts.filter((target)=>{
        return Object.values(target).slice(1,3)
                .join(" ").toLowerCase()
                .includes(searchValue.toLowerCase());
      });
      console.log(searchContacts);*/
      //setSearchResult(searchContacts);
      const myObject = {
        searchValue,
        contacts
      }
      searchDispatch({type: "filter search", payload: myObject})
    } else {
      //setSearchResult(contacts);
      searchDispatch({type: "normal contacts", payload: contacts})
    }
  }

  const removeContactHandler = async (id) => {
    console.log("Remove executed");

    await api.delete(`/contacts/${id}`);

    contactDispatch({type: "delete", payload: id});

    // logic to delete the match frm array of objects
    //const newContacts = contacts.filter((ele)=>{
    //  return ele.id !== id;
    //});
    //setContacts(newContacts);
    
  }

  const editContactHandler = async (contact) => {
    console.log("Edit executed");

    await api.put(`/contacts/${contact.id}`, contact);

    const newContacts =  await getContacts();

    contactDispatch({type: "edit", payload: newContacts});
    //setContacts(newContacts);
  }

  return (
    <div className="ui container">
      <Header/>
      <BrowserRouter>
        <Switch>
        <Route exact path="/" 
          render={(props) => (
            // use context used to pass the data globally "CommonContext"
            <CommonContext.Provider value={{
                loadingFlag,
                errorMsgFlag,
                searchTerm, setSearchTerm, 
                myContacts: () => { return searchTerm.length > 1 ? searchResult : contacts },
                searchHandler,
                removeContactHandler
              }}>
                <ContactList commponent={ContactList} />
            </CommonContext.Provider>
          )}/>
          <Route exact path="/contactlist/:id" 
            render={(props)=>(
              <PersonalDetails {...props} commponent={PersonalDetails}/>
            )} 
          />
          <Route exact path="/add" 
            render={(props)=>(
              <AddContact {...props} addContactHandler={addContactHandler}/>
            )} 
          />
          <Route exact path="/edit" 
            render={(props)=>(
              <EditContact {...props} editContactHandler={editContactHandler}/>
            )} 
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
