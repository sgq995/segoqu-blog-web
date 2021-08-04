import classNames from "classnames";
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
  const [isAnimating, setIsAnimating] = React.useState(false);

  const onClick = () => {
    setIsAnimating(true);
  }
  const onAnimationEnd = () => {
    setIsAnimating(false);
  }

  const articleClassName = classNames(
    'my-4 p-2 rounded-md hover:bg-gray-50',
    {
      'animate-ping': isAnimating
    }
  );

  return (
    <Link
      to={`/posts/${id}`}
      className="visited:text-gray-500"
      onClick={onClick}
    >
      <article className={articleClassName} onAnimationIteration={onAnimationEnd}>
        <header className="mb-2">
          <Title text={title} />
          <PublicationDate date={date} />
        </header>

        <Summary text={summary} />
      </article>
    </Link>
  );
}

export default Article;
