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
      <div className="App display-flex flex-col justify-center align-center">
        <div id="page-body">
          <Switch>
            <Route 
              path="/sign-in" 
              render={(props) => <SignInUp {...props} InUp="in"/>} 
            />
            <Route 
              path="/sign-up" 
              render={(props) => <SignInUp {...props} InUp="up"/>} 
             />
          </Switch>
        </div>
      </div>
    </Router>
    </>
);

export default UnauthenticatedApp;