import React from 'react';
import {Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import logo from '../apple_logo.svg';

const LandingPage = () => (
    <section className="shrink-to-size page landing-page display-flex flex-col justify-center align-center">
        <NavBar landing="true" />
        <div className="main-container ">
            <div id="landing-page-content" className="page-content-margins background-gradient">
                <Link to="/welcome">
                    <img src={logo} height="200" width="200" className="abs-centered" />
                    <h3 className="abs-centered" style={{color: 'black'}}>New Products Coming This Summer</h3>
                </Link>
                <div id="date-counter" className="abs-bottom-centered">2019</div>
            </div>
        </div>
    </section>
);

export default LandingPage;