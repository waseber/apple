import React from 'react';
import {Link } from 'react-router-dom';
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
                            <Link to="/iphone" className="nav__textLink">iPhone</Link>
                        </li>
                        <li>
                            <Link to="/macbook-pro" className="nav__textLink">MacBook Pro</Link>
                        </li>
                        <li>
                            <Link to="/apple-watch" className="nav__textLink">Watch</Link>
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