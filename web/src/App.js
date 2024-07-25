import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Usage from './pages/Usage';
import Dispute from './pages/Dispute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/usage" component={Usage} />
          <Route path="/dispute" component={Dispute} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
 
