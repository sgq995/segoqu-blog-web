import classNames from "classnames";
import React from "react";
import { Link, useHistory } from "react-router-dom";
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

  const history = useHistory();

  const onClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsAnimating(true);
  }
  const onAnimationEnd = () => {
    history.push(`/posts/${id}`);
    setIsAnimating(false);
  }

  const articleClassName = classNames(
    'box-border my-4 p-2 rounded-md transition-colors duration-300 hover:bg-gray-50',
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
