import React from "react";
import { NavLink } from "react-router-dom";
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

  return (
    <NavLink
      to={`/posts/${id}`}
      activeClassName="text-gray-500"
      onClick={onClick}
    >
      <article className={`my-4 p-2 rounded-md hover:bg-gray-50 ${isAnimating ? 'animate-ping' : ''}`} onAnimationIteration={onAnimationEnd}>
        <header className="mb-2">
          <Title text={title} />
          <PublicationDate date={date} />
        </header>

        <Summary text={summary} />
      </article>
    </NavLink>
  );
}

export default Article;
