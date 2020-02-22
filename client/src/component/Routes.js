import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Register from './Register';
import Register1 from './Register1';
import Login from './Login';
import dashboard from './dashboard';
import logOut from './logOut';

class Routes extends React.Component {
  render() {
   return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component= {Login} />
        <Route path="/logOut" component= {logOut} />
        <Route path="/registerJ" component={Register} />
        <Route path="/registerR" component={Register1} />
        <Route path="/dashboard" component={dashboard} />
      </Switch>
    </BrowserRouter>
    );
  }
};

export default Routes;
