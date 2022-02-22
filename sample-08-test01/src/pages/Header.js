import React from 'react';
import { NavLink  } from 'react-router-dom';
import bupalogo from '../assets/images/bupa-logo.svg'
import jsonData from '../router/config';
const configRoute = jsonData;

const Header = () => {

    return (
        <header className="layer1">
            <div className='vessel'>
                <ul className='menu'>
                    <li className='bupaLogo'>
                        <NavLink to="/" replace ><img width="80" height="80" src={bupalogo} alt="bupa-logo"/></NavLink>
                    </li>
                    {
                        configRoute.map(
                        (item, key) => 
                            <li key={key} activeclassname="active">
                                <NavLink to={item.path}>{item.name}</NavLink>
                            </li>
                        )
                    }
                    
                </ul>
            </div>
        </header>
    )
}

export default Header;