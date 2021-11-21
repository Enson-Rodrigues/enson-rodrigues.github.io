// Router JSX Code

import {
  Route, Routes, BrowserRouter
} from "react-router-dom";  // Switch is changed to Routes
import Header from '../pages/Header';
import AddContact from "../pages/AddContact";
import ContactList from '../pages/ContactList';
import PersonalDetails from '../pages/PersonalDetails';
import EditContact from '../pages/EditContact';

const CustomRouter = (props) => {
  return (
    <div className="ui container">
      <Header/>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" 
            element={
            <ContactList details={props}/>
          }/>
          
          <Route path="/contactlist/:id" 
            element={
              <PersonalDetails />
            } 
          />
          <Route path="/add" 
            element={
              <AddContact/>
            } 
          />
          <Route path="/edit" 
            element={
              <EditContact/>
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default CustomRouter;
