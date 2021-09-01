import React from "react"; //, { Component }
import {
    Route,
    NavLink,  //Switch, Router,
    HashRouter
} from "react-router-dom";

//Header section
import MenuNav from "./menu/menuNav";

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
        <MenuNav type={true}></MenuNav>
        <div className="content">
          <Route exact path="/" component={Home}/> 
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact} />
          <Route path="/article" component={Article} />
        </div>
        <MenuNav type={false}></MenuNav>
      </>
    </HashRouter>
  );
}

export default AppContainer;