import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './scss/main.scss';
import Home from "./components/home/";
import ProfileDetails from "./components/profileDetails";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>

        <div className="App">
          <Header></Header>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path="/:user_id" component={ProfileDetails}/> 
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
