import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import Login from './containers/Login';
import Protected from './components/Protected';

export const getRoutes = (store) => {
  const authRequired = (nextState, replaceState) => {
    // Now you can access the store object here.
    const state = store.getState();

    if (!state.login.loggedIn || state.login.loggedIn == null) {
      // Not authenticated, redirect to login.
      replaceState({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  };

  return (
    <Route path="/" component={App}>
      <Route path="login" component={Login} />
      <Route path="protected" component={Protected} onEnter={authRequired} />
    </Route>
  );
}