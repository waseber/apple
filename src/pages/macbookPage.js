import React from 'react';
import NavBar from '../components/NavBar';
import IconNav from '../components/IconNav';

const MacbookPage = () => (
    <div className="page display-flex flex-col justify-center align-center">
        <NavBar landing="false"/>
        <div className="main-container display-flex">
                <main id="macbook-page-content" className="page-content background-gradient-grey">
                <h2 className="abs-centered">MacBook Pro</h2>

                </main>
                <IconNav position="right"/>
            </div>
    </div>
);

export default MacbookPage;