import React from 'react';
import {
  NavLink
} from 'react-router-dom';
  
const MenuNav = (props) => {
  console.log(props);

  return (
    <>
      <ul className={(props.type ? 'header' : 'footer')}>
        {props.type ?<li><NavLink to="/" replace ><img alt="company logo" src="https://assets.bupa.co.uk/Assets/Global/Components/css/img/icon/logo.png"/></NavLink></li>: ""}
        <li><NavLink to="/" replace >Home</NavLink></li>
        <li><NavLink to="/article" replace >Our Article</NavLink></li>
        <li><NavLink to="/about" replace >About</NavLink></li>
        <li><NavLink to="/contact" replace >Contact</NavLink></li>
      </ul>
    </>
  );
};
  
export default MenuNav;