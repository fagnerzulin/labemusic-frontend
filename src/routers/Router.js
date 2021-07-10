import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/homePage/HomePage';
import LoginPage from '../pages/loginPage/LoginPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        {/* <Route exact path="/create-music" component={Login} />
        <Route exact path="/list-music" component={Login} /> */}
      </Switch>
    </BrowserRouter>
  );
}
