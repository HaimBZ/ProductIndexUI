// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Products from './containers/Products';
import Product from './containers/Product';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Products} />
     <Route path="/:id" component={Product} />
  </Route>
)
