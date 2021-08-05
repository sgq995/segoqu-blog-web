import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './views/Home';
import Posts from './views/Posts';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/posts" component={Posts} />
      </Switch>
    </Layout>
  );
}

export default App;
