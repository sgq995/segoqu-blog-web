import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import config from "../config";
import { route, ROUTE_POSTS_ID } from "../utils/sitemap";
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
  const articleClassName = classNames(
    'box-border my-4 p-2 rounded-md transition-colors transition-shadow duration-300',
    'select-none outline-none',
    'shadow-neumorphism-md',
    {
      'hover:shadow-inner-neumorphism-md': config.device.isDesktop,
      'active:shadow-inner-neumorphism-md cursor-default': config.device.isMobile,
      'animate-pulse': loading
    }
  );

  const body = (
    <article className={articleClassName}>
      <header>
        <Title text={title} />
        <PublicationDate date={date} />
      </header>

      <div className="mt-4">
        <Summary text={summary} />
      </div>
    </article>
  );

  if (loading) {
    return body;
  } else {
    return (
      <Link
        to={route(ROUTE_POSTS_ID, { id })}
        className="visited:text-gray-500"
      >
        {body}
      </Link>
    );
  }
}

export default Article;
