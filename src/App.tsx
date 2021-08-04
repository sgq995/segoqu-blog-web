import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './views/Home';

function App() {
  return (
    <Layout>
      <Switch>
        <Route component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
