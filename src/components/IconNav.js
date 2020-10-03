import React from 'react';
import {NavLink } from 'react-router-dom';
import iphone from '../iphone.svg';
import macbookGrey from '../mac-grey.svg';
import macbookWhite from '../mac-white.svg';
import watch from '../apple_watch.svg';

const IconNav = ({position, shade="dark"}) => {
    let className = ""
    if(position == "bottom"){
        className = "display-flex iconNav";
    } else {
        className = "iconNav--right";
    }
    let macbook = macbookGrey;
    if(shade == "light"){
        macbook = macbookWhite;
    }
    return (
    
    <nav>
        <ul 
        className={className}>
            <li><NavLink to="/iphone" className="iconNav__iconLink"><img src={iphone} /></NavLink></li>
            <li><NavLink to="/macbook-pro" className="iconNav__iconLink"><img src={macbook} /></NavLink></li>
            <li><NavLink to="/apple-watch" className="iconNav__iconLink"><img src={watch} /></NavLink></li>
        </ul>
    </nav>
)};

export default IconNav;