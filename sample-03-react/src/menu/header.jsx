import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu
} from './NavbarElements';
  
const Header = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/' replace>
            <img alt="company logo" src="https://assets.bupa.co.uk/Assets/Global/Components/css/img/icon/logo.png"/>
          </NavLink>
          <NavLink to='/' replace>
            Home
          </NavLink>
          <NavLink to='/article' replace>
            Annual Report
          </NavLink>
          <NavLink to='/about' replace>
            Teams
          </NavLink>
          <NavLink to='/contact' replace>
            Blogs
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Header;