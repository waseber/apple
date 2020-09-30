import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch} from 'react-router-dom';
import LandingPage from '../pages/landingPage';
import NotFoundPage from '../pages/NotFoundPage';

const AuthenticatedApp = () => (
    <>
    <Router>
        <section className="display-flex flex-col">
          <Switch>
            <Route path="/" component={LandingPage} exact/>
            <Route component={NotFoundPage} />
          </Switch>
        </section>
        
    </Router>    
    </>
);

export default AuthenticatedApp;