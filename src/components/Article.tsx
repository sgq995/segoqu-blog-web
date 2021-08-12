import React from "react";
import { Link } from "react-router-dom";
import PublicationDate from "./PublicationDate";
import Summary from "./Summary";
import Title from "./Title";

interface ArticleProps {
  id: number;
  title: string;
  date: number | Date;
  summary: string;
}

function Article({
  id,
  title,
  date,
  summary
}: ArticleProps): JSX.Element {
  return (
    <Link
      to={`/posts/${id}`}
      className="visited:text-gray-500"
    >
      <article className="box-border my-4 p-2 rounded-md transition-colors duration-300 hover:bg-gray-50">
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
