import React from "react"; //, { Component }
import {
    Route,
    NavLink,  //Switch, Router,
    HashRouter
} from "react-router-dom";

//Header section
import Header from "./menu/header";

// Menu pages
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import Article from "./component/article"

import './AppContainer.css';

//<Route exact path="/" component={props => <Home {...props} />}/> 

function AppContainer() {
  return (
    <HashRouter>
          <>
            <ul className="header">
              <li><NavLink to="/" replace ><img alt="company logo" src="https://assets.bupa.co.uk/Assets/Global/Components/css/img/icon/logo.png"/></NavLink></li>
              <li><NavLink to="/" replace >Home</NavLink></li>
              <li><NavLink to="/article" replace >Our Article</NavLink></li>
              <li><NavLink to="/about" replace >About</NavLink></li>
              <li><NavLink to="/contact" replace >Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/> 
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact} />
              <Route path="/article" component={Article} />
            </div>
            <ul className="footer">
              <li><NavLink to="/" replace >Home</NavLink></li>
              <li><NavLink to="/article" replace >Our Article</NavLink></li>
              <li><NavLink to="/about" replace >About</NavLink></li>
              <li><NavLink to="/contact" replace >Contact</NavLink></li>
            </ul>
          </>
        </HashRouter>
  );
}

export default AppContainer;