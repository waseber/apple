import React from 'react';
import NavBar from '../components/NavBar';
import IconNav from '../components/IconNav';
import logo from '../apple_logo.svg';

const IphonePage = () => (
        <div className="page display-flex flex-col justify-center align-center">
            <NavBar landing="false"/>
            <div className="main-container display-flex">
                <main id="iphone-page-content" className="page-content-left-margin ">
                    <section id="iphone-blurb" className="background-gradient-grey w-50">
                    <img src={logo} height="200" width="200" className="abs-centered"  />
                    <h1 className="red">iPhone</h1>
                    <h2>The ultimate iPhone</h2>
                    <p>The future is here. Join the iPhone Upgrade<br/>Program to get the latest iPhone - NOW!</p>
                    </section>
                    <div>
                        <h3>From $699</h3>
                        <a href="#" className="buy-now-red">Buy Now ></a>
                    </div>

                </main>
                <IconNav position="right"/>
            </div>
        </div>
);

export default IphonePage;