import React from 'react';
import Article from '../components/Article';
import articlesService from '../services/articles-service';
import { makeCancelable } from '../utils/cancellable-promise';

function Home(): JSX.Element {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    const promise = makeCancelable(articlesService.getAll());
    promise.then(response => setArticles(response.data));

    return () => {
      promise.cancel();
    }
  }, []);

  // const articles = new Array(5).fill(null).map(_ => ({
  //   id: Math.floor(10 * Math.random()),
  //   title: 'Title',
  //   date: Date.now() - Math.floor(60 * 60 * 1000 * Math.random() + 60 * 60 * 1000),
  //   summary: 'Summary'
  // }));

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
