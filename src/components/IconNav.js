import React from 'react';
import {Link } from 'react-router-dom';

const IconNav = ({position}) => (
    <nav>
        <ul className="">
            <li><Link>iphone</Link></li>
            <li><Link>macbook</Link></li>
            <li><Link>watch</Link></li>
        </ul>
    </nav>
);

export default IconNav;