import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Layout/Header";
import Home from './Components/Pages/Home';
import Articles from "./Components/Pages/Articles";
import Blogs from "./Components/Pages/Blogs";
import Contact from "./Components/Pages/Contact";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />{" "}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/articles' component={Articles} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/contact' component={Contact} />
           
            {/* <Route component={NotFound} />  */}
          </Switch>
        </Router>
      
      </div>
    );
  }
}

export default App;
