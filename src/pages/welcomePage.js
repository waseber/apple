import React from 'react';
import {Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import IconNav from '../components/IconNav';
import logoGrey from '../apple-grey.svg';

const WelcomePage = () => (
    <section className="page fade-in display-flex flex-col justify-center align-center">
        <NavBar landing="false"/>
        <div className="main-container display-flex">
        <main id="welcome-page-content" className="page-content-margins background-gradient-grey display-flex flex-col justify-bottom align-center">
            <img src={logoGrey} height="200" width="200" className="abs-centered"  />
            <h2 className="abs-centered slide-down-from-top">Welcome to Apple</h2>

            <Link>See our Products</Link>            
            <IconNav position="bottom"/>
        </main>
        </div>
    </section>
);

export default WelcomePage;