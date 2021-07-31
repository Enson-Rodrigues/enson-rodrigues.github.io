import React from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

// Menu pages
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Article from "./component/Article"

import './AppContainer.css';

//<Route exact path="/" component={props => <Home {...props} />}/> 

function AppContainer() {
  return (
    <HashRouter>
          <>
            <ul className="header">
              <li><img alt="company logo" src="https://assets.bupa.co.uk/Assets/Global/Components/css/img/icon/logo.png"/></li>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/article">Our Article</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/> 
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact} />
              <Route path="/article" component={Article} />
            </div>
            <ul className="footer">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/article">Our Article</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </>
        </HashRouter>
  );
}

export default AppContainer;