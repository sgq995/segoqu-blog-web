import React from 'react';
import { Helmet } from 'react-helmet';
import Article from '../components/Article';
import { Article as ArticleModel } from '../services/articles-service';
import postsService from '../services/posts-service';
import { makeCancelable } from '../utils/cancellable-promise';

function Home(): JSX.Element {
  const [error, setError] = React.useState<string | null>(null);
  const [articles, setArticles] = React.useState<ArticleModel[] | null>(null);

  React.useEffect(() => {
    const promise = makeCancelable(postsService.getAll());
    promise.then(response => {
      setArticles(response);
    });
    promise.catch(reason => {
      if (reason.isCanceled) {
        return;
      }

      setError(reason.message);
    });

    return () => promise.cancel();
  }, []);

  return (
    <section>
      <Helmet>
        <title>Sebastian Gonzalez Quintero</title>
      </Helmet>

      {error
        ? <p>{error}</p>
        : articles
          ? (
            articles.map(({ id, title, date, summary }) =>
              <Article
                key={id}
                id={id}
                title={title}
                date={date}
                summary={summary}
              />
            )
          )
          : (
            new Array(10).fill(null).map((_, key) => <Article key={key} loading />)
          )
      }
    </section>
  );
}

export default Home;
