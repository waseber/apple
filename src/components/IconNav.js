import React from 'react';
import {NavLink } from 'react-router-dom';

const IconNav = ({position}) => (
    <nav>
        <ul className="">
            <li><NavLink to="/iphone" className="iconNav__iconLink">iphone</NavLink></li>
            <li><NavLink to="/macbook-pro" className="iconNav__iconLink">macbook</NavLink></li>
            <li><NavLink to="/apple-watch" className="iconNav__iconLink">watch</NavLink></li>
        </ul>
    </nav>
);

export default IconNav;