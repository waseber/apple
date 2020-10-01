import React from 'react';
import {Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import IconNav from '../components/IconNav';
import {SVGInject} from '@iconfu/svg-inject';
import logo from '../apple_logo.svg';

const WelcomePage = () => (
    <section className="page display-flex flex-col justify-center align-center">
        <NavBar landing="false"/>
        <div className="main-container">
        <main id="welcome-page-content" className="page-content background-gradient-grey">
            <img src={logo} height="200" width="200" className="abs-centered" onload="SVGInject(this)"  />
            <h2 className="abs-centered">Welcome to Apple</h2>

            <Link>See our Products</Link>            
            <IconNav position="bottom"/>
        </main>
        </div>
    </section>
);

export default WelcomePage;