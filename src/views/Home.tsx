import React from 'react';
import { Helmet } from 'react-helmet';
import ArticleList from '../components/ArticleList';

function Home(): JSX.Element {
  return (
    <section>
      <Helmet>
        <title>Sebastian Gonzalez Quintero</title>
      </Helmet>

      <ArticleList />
    </section>
  );
}

export default Home;
