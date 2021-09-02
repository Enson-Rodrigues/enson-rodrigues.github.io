import React from "react";
import {
    Route,
    BrowserRouter
} from "react-router-dom";
import './scss/main.scss';
import './App.css';

//Menu 
import MenuNav from "./components/menuNav";

//Pages
import Home from "./pages/home";
import Forwarding from "./pages/forwarding";

function App() {
  return (
    <>
    <BrowserRouter>

      <div className="layer01">
        <div className="">
          <MenuNav type={true}></MenuNav>
            <div className="">
              <div className="vessel">
                <Route exact path="/" component={Home}/> 
                <Route exact path="/forwarding" component={Forwarding}/>
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
