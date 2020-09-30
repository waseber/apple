import React from 'react';
import NavBar from '../components/NavBar';
import logo from '../apple_logo.svg';

const LandingPage = () => (
    <>
        <NavBar landing="true" />
        <div >
            <img src={logo} height="80" width="80" />
        </div>
    </>
);

export default LandingPage;