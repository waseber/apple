import React from 'react';
import NavBar from '../components/NavBar';
import IconNav from '../components/IconNav';
import SubscribeModal from '../components/subscribeModal';

const MacbookPage = () => (
    <div className="page display-flex flex-col justify-center align-center">
        <NavBar landing="false"/>
        <div className="main-container display-flex flex-col">
        <main id="macbook-page-content" className="page-content-left-margin ">
                    <section id="macbook-blurb" className="display-flex">
                        <div style={{padding: '50px'}}>
                            <h1 className="" >MacBook Pro</h1>
                            <h2>More power.<br/>More pro</h2>
                            <div style={{width: '30%'}} className="muted display-flex justify-space">
                                <div>
                                    <h3>8-core</h3>
                                    <small>Intel processor</small>
                                </div>
                                <div>
                                    <h3>32GB</h3>
                                    <small>Memory</small>
                                </div>
                            </div>
                        </div>
                        
                        <div id="macbook-image"></div>
                        
                    </section>
                    <footer id="macbook-footer">
                        <a href="#" className="bold">Buy Now ></a>
                        <div id="desktop-image" ></div>
                        <SubscribeModal />
                    </footer>
                </main>
                
                <IconNav position="right"/>
            </div>
    </div>
);

export default MacbookPage;