import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import PublicationDate from "./PublicationDate";
import Summary from "./Summary";
import Title from "./Title";

interface DefaultArticleProps {
  loading?: false;
  id: number;
  title: string;
  date: number | Date;
  summary: string;
}

interface LoadingArticleProps {
  loading: true;
  id?: number;
  title?: string;
  date?: number | Date;
  summary?: string;
}

type ArticleProps = DefaultArticleProps | LoadingArticleProps;

function Article({
  loading,
  id,
  title,
  date,
  summary
}: ArticleProps): JSX.Element {
  const className = classNames(
    'box-border my-4 p-2 rounded-md transition-colors duration-300 hover:bg-gray-50',
    {
      'animate-pulse': loading
    }
  )

  return (
    <Link
      to={`/posts/${id}`}
      className="visited:text-gray-500"
    >
      <article className={className}>
        <header>
          <Title text={title} />
          <PublicationDate date={date} />
        </header>

        <div className="my-4">
          <Summary text={summary} />
        </div>
      </article>
    </Link>
  );
}

export default Article;
