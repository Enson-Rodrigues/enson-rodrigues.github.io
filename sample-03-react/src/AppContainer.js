import React from "react"; //, { Component }
import {
    Route,
    NavLink, Switch, Router,
    HashRouter
} from "react-router-dom";
import './sass/base.scss';

//Header section
import MenuNav from "./menu/menuNav";

// Menu pages
import Home from "./page/home";
import About from "./page/about";
import Contact from "./page/contact";
import Article from "./page/article"

import './AppContainer.css';

//<Route exact path="/" component={props => <Home {...props} />}/> 

function AppContainer() {
  return (
    <HashRouter>
      <>
        <MenuNav type={true}></MenuNav>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}/> 
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact} />
            <Route path="/article" component={Article} />
          </Switch>
        </div>
        <MenuNav type={false}></MenuNav>
      </>
    </HashRouter>
  );
}

export default AppContainer;