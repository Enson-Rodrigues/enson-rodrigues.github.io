import React from "react";
import {
    Route, Switch, // Switch is required to idetify the correct route
    BrowserRouter
} from "react-router-dom";
import './scss/main.scss';
import './App.css';

//Menu 
import MenuNav from "./components/menuNav";

//Pages
import Home from "./pages/home";
import Forwarding from "./pages/forwarding";
import ProfileDetails from "./pages/profileDetails";

function App() {
  return (
    <>
    <BrowserRouter>

      <div className="layer01">
        <div className="">
          <MenuNav type={true}></MenuNav>
            <div className="">
              <div className="vessel">
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/forwarding" component={Forwarding}/>
                  <Route exact path="/:userId" component={ProfileDetails}/>
                </Switch>
              </div>
            </div>
        </div>
      </div>

      <MenuNav type={false}></MenuNav>
      
    </BrowserRouter>
  </>
  );
}

export default App;
