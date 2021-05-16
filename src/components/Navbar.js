import React, {useState} from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom';
import { Button } from './Button';
import { withRouter } from "react-router-dom";
import {API_URL, ACCESS_TOKEN_NAME, userData, changeUserData} from '../constants/api-constants';


function Navbar(props) {
    const [click, setClick] = useState(false); 
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenuHome = () => {
        setClick(false);
        props.updateTitle('Home')
        props.history.push('/Home');
    }

    const closeMobileMenuProfile = () => {
        setClick(false);
        props.updateTitle('Profile')
        props.history.push('/Profile');
    }

    const closeMobileMenuSignup = () => {
        setClick(false);
        props.updateTitle('Signup')
        props.history.push('/Signup');
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }

    const handleLogout = () => {
        localStorage.clear();
        changeUserData(null);
        props.updateTitle('Login')
        props.history.push('/Login');
    }

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar bg-primary">
                {
                    localStorage.getItem(ACCESS_TOKEN_NAME) ?
                        <>
                        <div className="navbar-container">
                            <Link to="/Home" className="navbar-logo">
                                Hello Friend<img className="photo" src="/oreo.png" alt=""/>
                            </Link>
                            <div className="menu-icon" onClick={handleClick}>
                                <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />
                            </div>
                        </div>
                        <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/Home' className='nav-links' onClick={closeMobileMenuHome}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Profile' className='nav-links' onClick={closeMobileMenuProfile}>
                                    Profile
                                </Link>
                            </li>
                        </ul>
                        {button && <button onClick={handleLogout}>Logout</button>}
                        </>
                        :
                        <>
                        <div className="domain-name">Hello Friend<img className="photo" src="/oreo.png" alt=""/></div> 
                        </>
                    }
                </nav>
            </>
    )
}

export default withRouter(Navbar)