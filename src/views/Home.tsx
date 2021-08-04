import React from 'react';
import Article from '../components/Article';

function Home(): JSX.Element {
  const articles = new Array(5).fill(null).map(_ => ({
    id: Math.floor(10 * Math.random()),
    title: 'Title',
    date: Date.now() - Math.floor(60 * 60 * 1000 * Math.random() + 60 * 60 * 1000),
    summary: 'Summary'
  }));

  return (
    <section>
      {articles.map(({ id, title, date, summary }) =>
        <Article
          key={id}
          id={id}
          title={title}
          date={date}
          summary={summary}
        />
      )}
    </section>
  );
}

export default Home;