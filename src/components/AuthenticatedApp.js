import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch} from 'react-router-dom';
import LandingPage from '../pages/landingPage';
import WelcomePage from '../pages/welcomePage';
import IphonePage from '../pages/iphonePage';
import MacbookPage from '../pages/macbookPage';
import WatchPage from '../pages/watchPage';
import NotFoundPage from '../pages/NotFoundPage';

const AuthenticatedApp = () => (
    <>
    <Router>
        <div className="App">
            <Switch>
                <Route path="/" component={LandingPage} exact/>
                <Route path="/welcome" component={WelcomePage}/>
                <Route path="/iphone" component={IphonePage}/>
                <Route path="/macbook-pro" component={MacbookPage}/>
                <Route path="/apple-watch" component={WatchPage}/>
                <Route component={NotFoundPage} />
            </Switch>   
        </div>     
    </Router>    
    </>
);

export default AuthenticatedApp;