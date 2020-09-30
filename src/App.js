import React from 'react';
import './css/main.css';
import AuthenticatedApp from './components/AuthenticatedApp';
import UnauthenticatedApp from './components/UnauthenticatedApp';
//const AuthenticatedApp = React.lazy(() => import('./components/AuthenticatedApp'))
//const UnauthenticatedApp = React.lazy(() => import('./components/UnauthenticatedApp'))


function App() {
  const user = sessionStorage.getItem('isAuth');
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App;
