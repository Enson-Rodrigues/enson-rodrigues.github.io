import React from 'react';
import {
  NavLink //Switch, Router,
} from 'react-router-dom';

import logo from '../assests/logo.png';
  
const MenuNav = React.memo((props) => {
  console.log(props);

  return (
    <>
      {props.type ?
      <header>
        <div className="vessel clearfix">
          <div className="logo fl">
            <NavLink to="/" replace ><img alt="logo" src={logo}/></NavLink>
          </div>
          <ul className="fr">
            <li><NavLink to="/" replace >Home</NavLink></li>
            <li><NavLink to="/forwarding" replace >Forwarding</NavLink></li>
          </ul>
        </div>
      </header> : 
      <footer>
        <div className="vessel">
          <div className="commonPadding clearfix">
            <ul className="fl clearfix">
              <li><NavLink to="/" replace >Home</NavLink></li>
              <li><NavLink to="/forwarding" replace >Forwarding</NavLink></li>
            </ul>
            <div className="fr">Copyrigths 2021, All rights reserved with E & R company.</div>
          </div>
        </div>
      </footer>
      }
    </>
  );
});
  
export default MenuNav;