import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ListMusicPage from '../pages/ListMusicPage/ListMusicPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/list-music" component={ListMusicPage} />
        {/* <Route exact path="/create-music" component={Login} /> */}
      </Switch>
    </BrowserRouter>
  );
}
