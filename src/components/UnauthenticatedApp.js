import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
//import { TransitionGroup } from 'react-transition-group';
  import { TransitionGroup, SwitchTransition, CSSTransition } from "react-transition-group";
  import SignInUp from '../pages/signInUp';

const UnauthenticatedApp = () => (
    <>
    <Router>
      <div className="App">
          <Route render={({location}) =>(
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={500}
                    classNames="slide-in-left"
                  >
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
                </CSSTransition>
            </TransitionGroup>

          )}/>
          
          
      </div>
    </Router>
    </>
);

export default UnauthenticatedApp;