import React from 'react';
import Article from '../components/Article';
import articlesService, { Article as ArticleModel } from '../services/articles-service';
import { makeCancelable } from '../utils/cancellable-promise';

function Home(): JSX.Element {
  const [error, setError] = React.useState<string | null>(null);
  const [articles, setArticles] = React.useState<ArticleModel[] | null>(null);

  React.useEffect(() => {
    const promise = makeCancelable(articlesService.getAll());
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
            new Array(10).fill(<Article loading />)
          )
      }
    </section>
  );
}

export default Home;
