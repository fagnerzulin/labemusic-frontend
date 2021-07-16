import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import ListMusicPage from '../pages/ListMusicPage/ListMusicPage';
import CreateMusicPage from '../pages/CreateMusicPage/CreateMusicPage';
import HomePage from '../pages/HomePage/HomePage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/list-music">
          <ListMusicPage />
        </Route>
        <Route exact path="/create-music">
          <CreateMusicPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
