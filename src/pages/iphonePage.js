import React from 'react';
import NavBar from '../components/NavBar';
import IconNav from '../components/IconNav';
import logo from '../apple_logo.svg';

const IphonePage = () => (
        <div className="page display-flex flex-col justify-center align-center">
            <NavBar landing="false"/>
            <div className="main-container display-flex">
                <main id="iphone-page-content" className="page-content background-gradient-grey">
                <img src={logo} height="200" width="200" className="abs-centered"  />
                <h2 className="abs-centered">iPhone</h2>

                </main>
                <IconNav position="right"/>
            </div>
        </div>
);

export default IphonePage;