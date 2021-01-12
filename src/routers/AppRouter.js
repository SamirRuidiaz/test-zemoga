import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { HomeScreen } from '../pages/home';
import { loginSignupScreen } from '../pages/LoginSignup';
import { TrialScreen } from '../pages/Trials';
import { WorkScreen } from '../pages/Works';

export const AppRouter = () => {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ HomeScreen }/>
          <Route path="/trials" component={ TrialScreen }/>
          <Route path="/works" component={ WorkScreen }/>
          <Route path="/login-signup" component={loginSignupScreen}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}