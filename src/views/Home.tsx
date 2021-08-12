import React, { Dispatch, SetStateAction } from 'react';
import { RouteProps } from 'react-router-dom';
import Article from '../components/Article';
import withLoading from '../hocs/withLoading';
import articlesService, { Article as ArticleModel } from '../services/articles-service';
import { makeCancelable } from '../utils/cancellable-promise';

interface HomeProps extends RouteProps {
  setLoading: Dispatch<SetStateAction<boolean>>
}

function Home({
  setLoading
}: HomeProps): JSX.Element {
  // const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [articles, setArticles] = React.useState<ArticleModel[]>([]);

  React.useEffect(() => {
    setLoading(true);

    const promise = makeCancelable(articlesService.getAll());
    promise.then(response => {
      setArticles(response);
      setLoading(false);
    });
    promise.catch(reason => {
      if (reason.isCanceled) {
        return setLoading(false);
      }

      setError(reason.message);
      setLoading(false);
    });

    return () => promise.cancel();
  }, []);

  return (
    <section>
      {error ? (
        <p>{error}</p>
      ) : (
        articles.map(({ id, title, date, summary }) =>
          <Article
            key={id}
            id={id}
            title={title}
            date={date}
            summary={summary}
          />
        )
      )}
    </section>
  );
}

const HomeWithLoading = withLoading(Home, (<p>loading</p>));
export default HomeWithLoading;
