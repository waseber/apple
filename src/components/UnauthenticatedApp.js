import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
  import SignInUp from '../pages/signInUp';

const UnauthenticatedApp = () => (
    <>
    <Router>
      <div className="App">
          <Route render={({location}) =>(
              <Switch location={location}>
                  <Route 
                      path="/sign-in" 
                      render={(props) => <SignInUp {...props} InUp="in"/>}
                  />
                  <Route 
                      path="/sign-up" 
                      render={(props) => <SignInUp {...props} InUp="up"/>} 
                  />
                  <Route 
                      render={(props) => <SignInUp {...props} InUp="in"/>}
                  />
              </Switch>
          )}/>
      </div>
    </Router>
    </>
);

export default UnauthenticatedApp;