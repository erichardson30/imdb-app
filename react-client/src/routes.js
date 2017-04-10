import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Search from './containers/Search';

export const getRoutes = (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Search} />
    </Route>
  );
}