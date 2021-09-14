import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './views/Home';
import Posts from './views/Posts';

import { route, ROUTE_HOME, ROUTE_POSTS } from './utils/sitemap';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path={route(ROUTE_HOME)} component={Home} />

        <Route path={route(ROUTE_POSTS)} component={Posts} />
      </Switch>
    </Layout>
  );
}

export default App;
