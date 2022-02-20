import React from 'react';
import { Link } from 'react-router-dom';
import bupalogo from '../assets/images/bupa-logo.svg'


const Header = () => {
    return (
        <header className="layer1">
            <div className='vessel'>
                <ul className='menu'>
                    <li className='bupaLogo'>
                        <Link to="/" replace ><img width="80" height="80" src={bupalogo} alt="bupa-logo"/></Link>
                    </li>
                    <li><Link to="/" replace >Home</Link></li>
                    <li><Link to="/ourteam" replace >Our Team</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;