import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import logo from '../apple_logo.svg';

const NavBar = ({landing}) => {
    if(landing == "true"){
        return (
            <nav>
                <div id="nav-logo-container" className="w-100">
                    <img src={logo} height="80" width="80" />
                </div>
            </nav>
        )
    } else {
        return (
            <>
                <nav className="top-nav">
                    <div id="nav-logo-container" className="">
                        <Link to="/"><img src={logo} height="80" width="80" /></Link>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/iphone" className="nav__textLink">iPhone</NavLink>
                        </li>
                        <li>
                            <NavLink to="/macbook-pro" className="nav__textLink">MacBook Pro</NavLink>
                        </li>
                        <li>
                            <NavLink to="/apple-watch" className="nav__textLink">Watch</NavLink>
                        </li>
                        <li>
                            <Link to="" className="nav__textLink nav__textLink--button">Notify me</Link>
                        </li>
                    </ul>
                </nav>
                
                
            </>
        );
    }
    }

export default NavBar;