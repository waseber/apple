import React from 'react';
import NavBar from '../components/NavBar';
import IconNav from '../components/IconNav';

const WatchPage = () => (
    <div className="page display-flex flex-col justify-center align-center">
        <NavBar landing="false"/>
        <div className="main-container display-flex">
                <main id="watch-page-content" className="page-content background-gradient-grey">
                <h2 className="abs-centered">Apple Watch</h2>

                </main>
                <IconNav position="right"/>
            </div>
    </div>
);

export default WatchPage;