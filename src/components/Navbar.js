import React, {useState} from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom';
import { Button } from './Button';

export default function Navbar() {
    const [click, setClick] = useState(false); 
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar bg-primary">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Frinder<img className="photo" src="/oreo.png" alt=""/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
                <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                            Profile
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </nav>
        </>
    )
}
