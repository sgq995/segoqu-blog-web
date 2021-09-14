import React from "react";

import Article from './Article';
import postsService, { PostModel } from '../services/posts-service';
import { makeCancelable } from '../utils/cancellable-promise';


function ArticleList() {
  const [error, setError] = React.useState<string | null>(null);
  const [articles, setArticles] = React.useState<PostModel[] | null>(null);

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
    <>
      {error
        ? <p>{error}</p>
        : articles
          ? (
            articles.map(({ id, category, title, date, summary, tags }, key) =>
              <Article
                key={key}
                id={id}
                category={category}
                title={title}
                date={date}
                summary={summary}
                tags={tags}
              />
            )
          )
          : (
            <div className="animate-pulse">
              {new Array(10)
                .fill(null)
                .map((_, key) => <Article key={key} loading />)}
            </div>
          )
      }
    </>
  );
}

export default ArticleList;
